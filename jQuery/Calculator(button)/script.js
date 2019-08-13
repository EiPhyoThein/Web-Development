$(function(){
    $elForm = $("#form");
    $elNum1=$("#num1");
    $elNum2=$("#num2");
    $elSign=$("#sign");
    $elZero=$("#zero");
    $elOne=$("#one");
    $elTwo=$("#two");
    $elThree=$("#three");
    $elFour=$("#four");
    $elFive=$("#five");
    $elSix=$("#six");
    $elSeven=$("#seven");
    $elEight=$("#eight");
    $elNine=$("#nine");
    $elBtnCal=$("#btnCal");
    $elBtnClear=$("#btnClear");
    $elAns=$("#ans");
    $elAnsLabel=$("#ansLabel");
    
    
    function input($textField){
        if ($elZero.click(function(){
            $textField.val()=$textField.val()+"0";})
            ); 
        else if ($elOne.click(function(){
            $textField.val()=$textField.val()+"1";})
            ) ;
    }
    


    $elNum1.on("click", {$textField: $elNum1},input);
    
    

});