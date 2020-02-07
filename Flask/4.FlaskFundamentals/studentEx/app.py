from flask import Flask, render_template,url_for,redirect,request
from flask_modus import Modus
from student import Student

app=Flask(__name__)
modus=Modus(app)

eiPhyoThein=Student("Ei Phyo","Thein")
mayThuHnin=Student("May Thu", "Hnin")
thiriSan=Student("Thiri", "San")

students=[eiPhyoThein,mayThuHnin,thiriSan]

def find_student(student_id):
    return [student for student in students if student.id==student_id][0]

@app.route('/')
def root():
    return redirect(url_for('index'))

@app.route('/students',methods=["GET","POST"])
def index():
    if request.method=="POST":
        new_student=Student(request.form['first_name'],request.form['last_name'])
        students.append(new_student)
        return redirect(url_for('index'))
    return render_template("index.html",students=students)

@app.route('/students/new')
def new():
    return render_template("new.html")

@app.route('/students/<int:id>',methods=["GET","PATCH","DELETE"])
def show(id):
    found_student=""
    found_student=find_student(id)
    if found_student=="":
        return render_template("error.html")

    #change data with edit characters in form fields
    if request.method==b"PATCH":
        found_student.first_name=request.form['first_name']
        found_student.last_name=request.form['last_name']
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




