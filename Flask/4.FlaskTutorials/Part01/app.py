from flask import Flask, redirect, url_for

app=Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return "<h1>Hello World!</h1>"

@app.route("/<string:name>")
def user(name):
    return f"Hello hi {name}!"

@app.route("/admin")
def admin():
    return redirect(url_for("user",name="Admin"))

if __name__=="__main__":
    app.run(port=4000,debug=True,use_reloader=True)