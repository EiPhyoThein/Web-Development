from flask import Flask, render_template, request, redirect, url_for, session
from datetime import timedelta

app=Flask(__name__)
app.secret_key="hello"
app.permanent_session_lifetime=timedelta(minutes=3)


@app.route("/")
@app.route("/home")
def home():
    return render_template("index.html")

@app.route("/new")
def new():
    return render_template("new.html")

@app.route("/login",methods=["POST","GET"])
def login():
    if request.method=="POST":
        session.permanent=True
        user=request.form["nm"]
        session["user"]=user
        return redirect(url_for("user"))
    else:
        if "user" in session:
            return redirect(url_for("user"))
    return render_template("login.html")

@app.route("/user")
def user():
    if "user" in session:
        user=session["user"]
        msg=f'''<h1>Login name: {user} </h1> \
        <a href="home">Go Back Home ... </a>'''
        return msg
    else:
        return redirect(url_for("login"))

@app.route("/logout")
def logout():
    session.pop("user",None)
    return redirect(url_for("login"))


if __name__=="__main__":
    app.run(debug=True)