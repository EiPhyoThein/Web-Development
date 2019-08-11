(function(){
    "use strict";
   
    var elForm=document.getElementById("cv"),
    elName=document.getElementById("name"),
    elDate=document.getElementById("dob"),
    elSex=document.getElementById("sex"),
    elEducation=document.getElementById("edu"),
    elParent=document.getElementById("parent"),
    elAddress=document.getElementById("address"),
    elPhone=document.getElementById("phone"),
    elCourse=document.getElementById("course"),
    elDays=document.getElementById("days"),
    elTime=document.getElementById("time"),
    elStartDate=document.getElementById("startDate"),
    elRemark=document.getElementById("remark"),
    elSave=document.getElementById("save"),
    elShow=document.getElementById("show");
  
    var form="",
        name="aaa",
        date="",
        sex="",
        education="",
        parent="",
        address="",
        phone="",
        course="",
        days="",
        time="",
        startDate="",
        remark="";
    
        var allStudents=[];
    
        function student(name,date,sex,education,parent,address,phone,course,days,time,startDate,remark){
        this.name=name;
        this.date=date;
        this.sex=sex;
        this.education=education;
        this.parent=parent;
        this.address=address;
        this.phone=phone;
        this.course=course;
        this.days=days;
        this.time=time;
        this.startDate=startDate;
        this.remark=remark;

    }
    function Save(){
        name=elName.value;
        date=elDate.value;
        sex=elSex.value;
        education=elEducation.value;
        parent=elParent.value;
        address=elParent.value;
        phone=elPhone.value;
        course=elCourse.value;
        days=elDays.value;
        time=elTime.value;
        startDate=elStartDate.value;
        remark=elRemark.value;
        var aStudent=new student(name,date,sex,education,parent,address,phone,course,days,time,startDate,remark);
        allStudents.push(aStudent);
        clearForm();
        
             
    }
    function show(){
        for(var i = 0; i < allStudents.length; i++)
        {   console.log(i);
            console.log(allStudents[i]);
            
        }
    }
    function clearForm(){
        elForm.reset();
    }

    elSave.addEventListener("click",Save,false);
    elShow.addEventListener("click",show,false);
   

}());