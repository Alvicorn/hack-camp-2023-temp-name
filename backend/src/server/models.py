from datetime import datetime

from . import db
from flask_login import UserMixin


class Topic(db.Model):
    topic_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    creation_date = db.Column(db.DateTime(timezone=True), default=datetime.now)
    users = db.relationship("User")
    
    def get_id(self):
        return self.topic_id
    
    def __repr__(self):
        return f"<Topic: {self.topic_id} | title: {self.name}>"


class TrustedSite(db.Model):
    trusted_site_id = db.Column(db.Integer, primary_key=True)
    trusted_site = db.Column(db.String(100), nullable=False)
    creation_date = db.Column(db.DateTime(timezone=True), default=datetime.now)
    users = db.relationship("User")
    
    def get_id(self):
        return self.trusted_site_id
    
    def __repr__(self):
        return f"<TrustedSite: {self.trusted_site_id} | title: {self.trusted_site}>"


class Article(db.Model):
    article_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(500), nullable=False)
    source_url = db.Column(db.String(500), nullable=False)
    summary = db.Column(db.String(1000), nullable=False)
    request_date = db.Column(db.DateTime(timezone=True), default=datetime.now)
    last_accessed_date = db.Column(db.DateTime(timezone=True), default=datetime.now)
    topic = db.Column(db.Integer, db.ForeignKey("topic.topic_id"))
    users = db.relationship("User")
    
    def get_id(self):
        return self.article_id
    
    def __repr__(self):
        return f"<Article: {self.article_id} | title: {self.title}>"


class User(db.Model, UserMixin):
    user_id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)
    first_name = db.Column(db.String(150), nullable=False)
    last_name = db.Column(db.String(150), nullable=False)
    saved_topics = db.Column(db.Integer, db.ForeignKey("topic.topic_id"))
    saved_trusted_sites = db.Column(db.Integer, db.ForeignKey("trusted_site.trusted_site_id"))
    accessed_articles = db.Column(db.Integer, db.ForeignKey("article.article_id"))
        
    def get_id(self):
        return self.user_id

    def __repr__(self):
        return (f"<User: {self.email} | saved topics: {self.saved_topics}"
                + f"| saved trusted sites: {self.saved_trusted_sites}"
                * f"| saved articles: {self.saved_articles}>")
