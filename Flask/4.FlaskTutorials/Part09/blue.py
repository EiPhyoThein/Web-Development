from flask import Blueprint, render_template

blue=Blueprint('blue', __name__, static_folder="static",template_folder="templates")

@blue.route("/home")
@blue.route("/")
def home():
    return render_template("index.html")