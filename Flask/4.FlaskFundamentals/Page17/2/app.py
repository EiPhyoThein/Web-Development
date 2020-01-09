from flask import Flask, render_template,url_for
from student import Student

app=Flask(__name__)

eiPhyoThein=Student(name="Ei Phyo Thein")
mayThuHnin=Student(name="May Thu Hnin")
thiriSan=Student(name="Thiri San")

students=[eiPhyoThein,mayThuHnin,thiriSan]

@app.route('/')
@app.route('/students')
def index():
    return render_template("index.html",students=students)

@app.route('/students/new')
def new():
    return render_template("new.html")

