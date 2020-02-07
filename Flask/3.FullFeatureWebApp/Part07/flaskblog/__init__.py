from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager

app=Flask(__name__)
app.config['SECRET_KEY']='0de0950c128ff300f03e6e1a0c32194f'
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db=SQLAlchemy(app)
bcrypt = Bcrypt(app)

login_manager=LoginManager(app)
login_manager.login_view='login'
login_manager.login_message_category='info'

from flaskblog import routes