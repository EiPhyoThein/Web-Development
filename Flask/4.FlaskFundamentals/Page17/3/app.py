from flask import Flask, render_template,url_for,redirect
from student import Student

app=Flask(__name__)

eiPhyoThein=Student(name="Ei Phyo Thein")
mayThuHnin=Student(name="May Thu Hnin")
thiriSan=Student(name="Thiri San")

students=[eiPhyoThein,mayThuHnin,thiriSan]

@app.route('/')
@app.route('/students',methods=["GET","POST"])
def index():
    return render_template("index.html",students=students)

@app.route('/students/new')
def new():
    return render_template("new.html")

@app.route('/students/<int:id>')
def show(id):
    found_student=""
    for student in students:
        if student.id==id:
            found_student=student
    if found_student=="":
        return render_template("error.html")
    return render_template("show.html",student=found_student)

@app.route('/students/<int:id>')
def edit(id):
    found_student=[student for student in students if student.id==id][0]
    return render_template("edit.html",student=found_student)





