from flask import Flask
app=Flask(__name__)

@app.route("/")
def home():
    return "<h1>Home Page</h1>"
    
@app.route("/about")
def about():
    return "<h1>
