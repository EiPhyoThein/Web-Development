(function() {
    "use strict";   

    var $elBtnGetChar = $("#btnGetChar"),
        $elDivLeftCol = $("#divLeftCol"),
        $elDivRightCol = $("#divRightCol");
       
    var xhr = new XMLHttpRequest();
    $(window).resize(function(){
        var w = window.innerWidth;
            console.log(w);
            if(w<600) $elDivRightCol.css(
                {clear: 'both',
                'font-size': '18px'});
            if(w>600) $elDivRightCol.css(
                {float: 'left',
                clear:'none',
                width: '45%',
                'font-size': '1.5em'}); 

            console.log(w);
    })
    function fnGetChar() {
        console.log("fnGetChar() STARTS");

        xhr.open("GET", "characters.json", true);
        xhr.send(null);

        xhr.onload = function() {
            var charObj = JSON.parse(xhr.responseText);
            var randomChar = Math.floor(Math.random() * charObj.allChars.length);
            var strName = "",
                strStats = "";

            console.log(charObj);
            
            strName += `<p><img src='./img/${charObj.allChars[randomChar].graphic}'></p>`;
            strName += `<p>${charObj.allChars[randomChar].name}</p>`;
            $elDivLeftCol.html(strName).hide().fadeIn(2000);

            strStats += `<p>Origin: ${charObj.allChars[randomChar].origin}</p>`;
            strStats += `<p>Powers:<br>
                        <ul>
                        <li>${charObj.allChars[randomChar].powers[0].p1}</li>
                        <li>${charObj.allChars[randomChar].powers[0].p2}</li>
                        </ul>
                        </p>`;
            
            $elDivRightCol.html(strStats).hide().delay(250).fadeIn(1750);
            

    
        }; // END onload (after successful connection to the file)
    } // END fnGetChar()

    $elBtnGetChar.on("click", fnGetChar);
}());