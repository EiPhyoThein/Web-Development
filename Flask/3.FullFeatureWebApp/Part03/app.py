from flask import Flask,render_template, url_for, flash, redirect
from forms import RegistrationForm, LoginForm



app=Flask(__name__)
app.config['SECRET_KEY']="81db251601a75b1272371ed188b40b10"

posts=[
    {
        'author': 'U Chit Thein',
        'title': 'Blog Post 1',
        'content': 'Life is a battle.',
        'date_posted': 'January 9, 2020'
    },
    {
        'author': 'Daw Ei Phyo Thein',
        'title': 'Blog Post 2',
        'content': 'The only job which start on the top is digging.',
        'date_posted': 'January 9, 2020'
    },
    {
        'author': 'Zin Ko Tun',
        'title': 'Blog Post 3',
        'content': 'Luck is work.',
        'date_posted': 'January 9, 2020'
    }
]

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html",posts=posts)


@app.route("/about")
def about():
    return render_template("about.html",title="About")

@app.route("/register",methods=["GET","POST"])
def register():
    form=RegistrationForm()
    if form.validate_on_submit():
        flash(f'Account created for {form.username.data}!', 'success')
        return redirect(url_for('home'))
    return render_template('register.html',title="Register",form=form)

@app.route('/login',methods=["GET","POST"])
def login():
    form=LoginForm()
    if form.validate_on_submit():
        if form.email.data=="admin@blog.com" and form.password.data=="password":
            flash('You have been logged in!','success')
            return redirect(url_for('home'))
        else:
            flash("Login Unsuccessful. Please check username and password", "danger")
    return render_template('login.html',title="Login",form=form)