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
    
    function btnHover{
        if ( $elZero.hover() ) { $elZero.src="img/hover0.png"; }
    }
    
    function input(textField){
        if ($elZero.click() ) textField.val()=textField.val()+"0";
        else if ($elOne.click() ) textField.val()=textField.val()+"1";
    }
    



    while(!$elBtnCal.click() || $elBtnClear.click())
    {
        if($elNum1:focus) input($elNum1);
    if($elNum2:focus) input($elNum2);
    }
    

});