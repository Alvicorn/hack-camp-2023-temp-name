import logging
from os import path

from dotenv import dotenv_values
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_cors import CORS


log = logging.getLogger(__name__)
db = SQLAlchemy()
DB_NAME = "database.db"


def create_server():
    log.info("Creating server...")
    app = Flask(__name__)
    CORS(app, resources={"/*": {"origins": "http://127.0.0.1:8000"}})
    app.config["SECRET_KEY"] = dotenv_values(".env")["SERVER_KEY"]
    app.config['CORS_HEADERS'] = 'Access-Control-Allow-Origin'
    app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{DB_NAME}"
    db.init_app(app)
    
    login_manager = LoginManager()
    login_manager.login_view = "auth.login"
    login_manager.init_app(app)
    
    from .views import views
    from .auth import auth        
    app.register_blueprint(views, url_prefix="/")
    app.register_blueprint(auth, url_prefix="/")
    
    from .models import Topic, TrustedSite, Article, User
    create_database(app)
    
    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))

    return app


def create_database(app):
    if not path.exists(f"website/{DB_NAME}"):
        with app.app_context():
            db.create_all()
        log.info("Database created")