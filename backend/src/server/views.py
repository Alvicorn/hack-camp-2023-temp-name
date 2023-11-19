from flask import Blueprint,request, jsonify
from flask_login import login_required, current_user


from .models import User, Topic, TrustedSite, Article
from . import db


views = Blueprint("views", __name__)

@views.route("/")
@login_required
def home():
    if request.method == "GET":
        return "home page with articles"

        
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
