from flask import render_template, url_for, flash, redirect
from flaskblog import app
from flaskblog.forms import RegistrationForm, LoginForm
from flaskblog.models import User, Post

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

@app.route("/register",methods=['GET','POST'])
def register():
    form=RegistrationForm()
    if form.validate_on_submit():
         flash(f'Account created for {form.username.data}!','success')
         return redirect(url_for('home'))
    return render_template('register.html',title="Resister",form=form)

@app.route("/login",methods=['GET','POST'])
def login():
    form=LoginForm()
    if form.validate_on_submit():
        if form.email.data=='admin@blog.com' and form.password.data=='password':
            flash('You have been logged in!','success')
            return redirect(url_for('home'))
        else:
            flash('Login Unsuccessful. Please check username and password', 'danger')
    return render_template('login.html',title="Login",form=form)