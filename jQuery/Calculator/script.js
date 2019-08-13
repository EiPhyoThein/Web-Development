$(function(){
    $elBtnCal = $("#btnCal");
    $elBtnClear = $('#btnClear');
    $elResult=$('#result');
    $elForm = $('#form');
    
    function fnCal(){
        $num1=$('#num1').val();
        $num2=$('#num2').val();
        if($num1=='' || $.trim($num1)=='')   { $num1=$('#num1').val(); $num1=0; alert("First Number is blank.");}
            else    $num1=parseFloat($('#num1').val());
                    
                
        if($(num2)== '' || $.trim($num2)=='')   { $num1=$('#num1').val(); $num1=0; alert("Second Number is blank");}
            else   $num2=parseFloat($('#num2').val());

        $sign=$('#sign').val();
        $result=0;
        
        switch($sign){
            case '*': $result = $num1* $num2; break;
            case '/':  if($num2 == 0 ) { $result=0; alert("Zero Division Error"); break;}
                        else {  $result = $num1 / $num2;  break; }   
            case '+': $result = $num1 + $num2; break;
            case '-': $result = $num1 - $num2; break;
        }
      
        $resultStr=$result.toString();
        $elResult.val($resultStr);
        
    }
    function fnClear(){  $elForm[0].reset();   }
   
        
    $elBtnCal.click(fnCal);
    $elBtnClear.click(fnClear);

});