class Student():
    count=1
    def __init__(self,name):
        self.name=name
        self.id=Student.count
        Student.count+=1