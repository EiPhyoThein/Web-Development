from flask import Flask, render_template,url_for,redirect,request
from flask_modus import Modus
from student import Student

app=Flask(__name__)
modus=Modus(app)

eiPhyoThein=Student(name="Ei Phyo Thein")
mayThuHnin=Student(name="May Thu Hnin")
thiriSan=Student(name="Thiri San")

students=[eiPhyoThein,mayThuHnin,thiriSan]

@app.route('/')
@app.route('/students/')
@app.route('/students',methods=["GET","POST"])
def index():
    if request.method=="POST":
        students.append(Student(request.form['name']))
        return redirect(url_for('index'))
    return render_template("index.html",students=students)

@app.route('/students/new')
def new():
    return render_template("new.html")

@app.route('/students/<int:id>',methods=["GET","PATCH","DELETE"])
def show(id):
    found_student=""
    for student in students:
        if student.id==id:
            found_student=student
    if found_student=="":
        return render_template("error.html")

    if request.method==b"PATCH":
        found_student.name=request.form['name']
        return redirect(url_for('index'))

    if request.method==b'DELETE':
        students.remove(found_student)
        return redirect(url_for("index"))
    return render_template("show.html",student=found_student)


@app.route('/students/<int:id>/edit')
def edit(id):
    found_student=""
    found_student=[student for student in students if student.id==id][0]
    if found_student=="":
        return render_template("error.html")
    return render_template("edit.html",student=found_student)




