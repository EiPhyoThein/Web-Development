//Create variables
let result=document.getElementById('result'),
equal=document.getElementById('equal'),
reset=document.getElementById('clear'),
digits=document.getElementsByClassName('digits'),
symbols=document.getElementsByClassName('symbols');

// this prints out symbol on the calculator screen.
function printSymbol(e) {
    let obj = e.target;
    console.log(e.target.id);
    
    if(obj.id == 'period') {
        result.value += obj.textContent;
    } else if(obj.id == 'leftP') {
        result.value = obj.textContent;
    } else if (result.value != 0) {
        result.value += obj.textContent;
    }
}

// if the clicked object is digit
function printDigit(e) {
    let obj = e.target;
    
    if (result.value === '0') {
        result.value = obj.textContent;
    } else {
        result.value += obj.textContent;
    }
}


for (let digit of digits) {
    digit.addEventListener('click', printDigit);
}

for (let symbol of symbols) {
    symbol.addEventListener('click', printSymbol);
}

// reset.addEventListener('click', clearResult);
reset.addEventListener('click', () => result.value = 0);

equal.addEventListener('click', e => result.value = eval(result.value));