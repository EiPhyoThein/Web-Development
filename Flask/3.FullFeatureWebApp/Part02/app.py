from flask import Flask
app=Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return "<h1>Second Page</h1>"

@app.route("/about")
def about():
    return "<h1>About Page</h1>"