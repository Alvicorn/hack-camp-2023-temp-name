import json
from dotenv import dotenv_values

from flask import Blueprint,request, jsonify
from flask_login import login_required, current_user


from .models import User, Topic, TrustedSite, Article
from . import db
from .summarizer import Summarizer
from .news import News


views = Blueprint("views", __name__)
env = dotenv_values(".env")
summarizer = Summarizer(env["AGENT_HUB_API_KEY"], env["X_AUTH_KEY"])
news = News(env["NEWS_API_KEY"])


@views.route("/")
@login_required
def home():
    if request.method == "GET":
        articles = news.get_articles(["world"], ["abc-news"])  
        print(json.dumps(articles, indent=4))        
        formatted_articles = []    
        for article in articles["articles"]:
            print(json.dumps(article, indent=4))
            formatted_article = {
                "title": article["title"],
                "source_url": article["url"],
                "image_url": article["urlToImage"],
            }        
            formatted_articles.append(formatted_article)
        
        urls = [ article["source_url"] for article in formatted_articles]
        
      
        summaries = summarizer.summarize(urls)
        if summaries is None:
            return jsonify({
                "status": 408,
                "request": "POST",
                "message": "Took too long to summarize"
            })
        if not summaries:
            return jsonify({
                "status": 400,
                "request": "POST",
                "message": "Could not summarize urls"
            })
        else:
            article_ids = []
            
            summaries = summaries.replace("\n", "").split("|")
            for summary in summaries:
                split = summary.split("Summary:")
                source_url = split[0].split("Link:")[1]
                
                split = split[1].split("Category:")
                data = split[0]
                
                split = split[1].split("Justification:")
                topic = split[0]
                
                article = Article.query.filter_by(source_url=source_url).first()
                if article:
                    article_ids.append(article.article_id)
                else:
                    new_article = Article(
                        title="TODO",
                        source_url=source_url,
                        summary=data,
                        topic=topic
                    )
                    db.session.add(new_article)
                    db.session.commit()
                    article_ids.append(new_article.article_id)

            obj = {"articles": []}
            articles = obj["articles"]
            for article_id in article_ids:
                article = Article.query.filter_by(article_id=article_id).first()
                articles.append({
                    "source_url": article.source_url,
                    "title": "TODO",
                    "summary": article.summary,
                    "topic": article.topic
                })

            return jsonify(obj)
        
        
@views.route("/topics", methods=["GET", "POST"])
@login_required
def topics():
    if request.method == "GET":
        return "get current topics"
    elif request.method == "POST":
        return "set topics"
    

@views.route("/trusted-sites", methods=["GET", "POST"])
@login_required
def trusted_sites():
    if request.method == "GET":
        return "get current trusted sites"
    elif request.method == "POST":
        return "set trusted sites"
