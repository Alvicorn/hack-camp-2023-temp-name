import json
from datetime import datetime

from newsapi import NewsApiClient


class News:
    
    def __init__(self, api_key: str):
        self.news_api = NewsApiClient(api_key)
    
    def get_articles(self, topics: list[str], trusted_sources: list[str]):
        top_headlines = self.news_api.get_top_headlines(
                                        q=",".join(topics),
                                        sources=",".join(trusted_sources),
                                        language='en')
        return top_headlines
        
