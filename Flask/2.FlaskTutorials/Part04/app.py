from flask import Flask, render_template, request, redirect, url_for

app=Flask(__name__)

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
        user=request.form["nm"]
        return redirect(url_for("user",usr=user))
    else:
        return render_template("login.html")

@app.route("/<usr>")
def user(usr):
    msg=f'''<h1>Login name: {usr} </h1> \
    <a href="home">Go Back Home ... </a>'''
    return msg

if __name__=="__main__":
    app.run(debug=True)