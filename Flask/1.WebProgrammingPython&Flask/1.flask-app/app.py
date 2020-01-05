# from flask import Flask
from flask import Flask,render_template,request
import random, datetime

app=Flask(__name__)

@app.route("/")
@app.route("/index")
# version1
# def index():
#     return "Hello, World!"

# version2
# def index():
#     return "<h1 style='color:red; text-align: center;'>Hello, World!</h1>"

# version3
def index():
    # head = "Hello, Good Morning"
    # head=random.choice(["Hello, World!", "Hi there!", "Good morning!"])
    
    # now=datetime.datetime.now()
    # new_year=(now.month==1 and now.day==1)

    # names=["Alice","Bob","Charlie"]

    # return render_template("index.html", headline=head)
    # return render_template("index.html", new_year=new_year)
    # return render_template("index.html",names=names)
    return render_template("index.html")
    
    
@app.route("/eiphyo")
def eiphyo():
    return "Hello, Ei Phyo!"


@app.route("/<string:name>")
def helloName(name):
    return "Hello, {}".format(name)

@app.route("/<int:num>")
def number(num):
    return f"My favourite number is  {num} and their square value is {num*num}"

@app.route("/more")
def more():
    return render_template('more.html')

@app.route("/hello", methods=["POST"])
def hello():
    na=request.form.get("name")
    return render_template("hello.html",name=na)