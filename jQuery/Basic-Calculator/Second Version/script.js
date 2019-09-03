// Create variables
let result = document.getElementById('result'),
    num0 = document.getElementById('num0'),
    num1 = document.getElementById('num1'),
    num2 = document.getElementById('num2'),
    num3 = document.getElementById('num3'),
    num4 = document.getElementById('num4'),
    num5 = document.getElementById('num5'),
    num6 = document.getElementById('num6'),
    num7 = document.getElementById('num7'),
    num8 = document.getElementById('num8'),
    num9 = document.getElementById('num9'),
    add = document.getElementById('add'),
    sub = document.getElementById('sub'),
    mult = document.getElementById('mult'),
    div = document.getElementById('div'),
    period = document.getElementById('period'),    
    rightP = document.getElementById('rightP'),
    leftP = document.getElementById('leftP'),
    equal = document.getElementById('equal'),
    reset = document.getElementById('clear');

/*
function clearResult(e) {
    result.textContent = '0';
}
*/

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

let digits = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9],
    symbols = [add, sub, mult, div, period, rightP, leftP];

for (let digit of digits) {
    digit.addEventListener('click', printDigit);
}

for (let symbol of symbols) {
    symbol.addEventListener('click', printSymbol);
}

// reset.addEventListener('click', clearResult);
reset.addEventListener('click', () => result.value = 0);

equal.addEventListener('click', e => result.value = eval(result.value));