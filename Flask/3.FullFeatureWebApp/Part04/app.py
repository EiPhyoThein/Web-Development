from datetime import datetime
from flask import Flask, render_template, url_for, flash, redirect
from flask_sqlalchemy import SQLAlchemy
from forms import RegistrationForm, LoginForm

app=Flask(__name__)
app.config['SECRET_KEY']='ebc6f21c20e2709746e180374625b9b7'
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///site.db'
db=SQLAlchemy(app)

class User(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    username=db.Column(db.String(20),unique=True,nullable=False)
    email=db.Column(db.String(120),unique=True,nullable=False)
    image_file=db.Column(db.String(20),nullable=False,default='default.jpg')
    password=db.Column(db.String(60),nullable=False)
    posts=db.relationship('Post',backref='author',lazy=True)

    def __repr__(self):
        return f"User('{self.username}','{self.email},'{self.image_file}')"

class Post(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    title=db.Column(db.String(100),nullable=False)
    date_posted=db.Column(db.DateTime, nullable=False,default=datetime.utcnow)
    content=db.Column(db.Text,nullable=False)
    user_id=db.Column(db.Integer,db.ForeignKey('user.id'),nullable=False)

    def __repr__(self):
        return f"Post('{self.title}','{self.date_posted}')"

posts=[
    {
        'author': 'Ei Phyo Thein',
        'title': 'Post 1',
        'content': 'En eye for an eye, a tooth for a tooth.',
        'date_posted': 'January 23, 2020'
    },
    {
        'author': 'U Chit Thein',
        'title': 'Post 2',
        'content': 'Nothings is free. ',
        'date_posted': 'January 23, 2020'
    },
    {
        'author': 'Ko Zin Ko Tun',
        'title': 'Post 3',
        'content': 'Work Perfect. ',
        'date_posted': 'January 23, 2020'
    }
]

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html",posts=posts)

@app.route("/about")
def about():
    return render_template('about.html',title='About')

@app.route("/register",methods=['GET'])
def register():
    form=RegistrationForm()
    # if form.validate_on_submit():
    #     flash(f'Account created for {form.username.data}!','success')
    return render_template('register.html',title="Resister",form=form)

@app.route("/login",methods=['GET'])
def login():
    form=LoginForm()
    # if form.validate_on_submit():
    #     flash(f'Account created for {form.username.data}!','success')
    return render_template('login.html',title="Login",form=form)