from flask import (
    Blueprint, 
    request,
    jsonify,
    redirect,
    url_for 
)
from werkzeug.security import (
    generate_password_hash, 
    check_password_hash
)
from flask_login import (
    login_user,
    login_required,
    logout_user
)

from .models import User
from . import db


auth = Blueprint("auth", __name__)


@auth.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")
        
        user = User.query.filter_by(email=email).first()
        if user:
            if check_password_hash(user.password, password):
                login_user(user, remember=True)
                return jsonify({                    
                    "status": 200,
                    "request": "POST"
                })
            else:
                return jsonify({                    
                    "status": 400,
                    "request": "POST",
                    "message": "Invalid password" 
                })

        else:
            return jsonify({                    
                    "status": 400,
                    "request": "POST",
                    "message": "Invalid email" 
                })
    return {}
 
 
@auth.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for("auth.login"))


@auth.route("/sign-up", methods=["GET", "POST"])
def sign_up():
    if request.method == "POST":
        first_name = request.form.get("firstName")
        last_name = request.form.get("lastName")
        email = request.form.get("email")
         
        password = request.form.get("password")
        verify_password= request.form.get("verifyPassword")
        
        user = User.query.filter_by(email=email).first()
        if user:
            return jsonify({                    
                "status": 400,
                "request": "POST",
                "message": "Email already exists" 
            })
        elif len(email) < 4:
            return jsonify({                    
                "status": 400,
                "request": "POST",
                "message": "Email length must have more than 4 characters"
            })
        elif len(first_name) < 2:
            return jsonify({                    
                "status": 400,
                "request": "POST",
                "message": "First name must have more than 1 characters"
            })
        elif len(last_name) < 2:
            return jsonify({                    
                "status": 400,
                "request": "POST",
                "message": "Last name must have more than 1 characters"
            })
        elif password != verify_password:
            return jsonify({                    
                "status": 400,
                "request": "POST",
                "message": "Passwords do not match"
            })
        elif len(password) < 1:
            return jsonify({                    
                "status": 400,
                "request": "POST",
                "message": "Password must have at least 1 characters"
            })
        else:
            new_user = User(
                email=email,
                first_name=first_name,
                last_name=last_name,
                password=generate_password_hash(password, method="pbkdf2:sha256:600000")
            )
            db.session.add(new_user)
            db.session.commit()
            login_user(new_user, remember=True)
            return jsonify({"status": 200})
        
    return {}