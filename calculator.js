

const buttons   = document.querySelectorAll('button');
const input     = document.getElementById('input');
const running   = document.getElementById('running');
const clear     = document.getElementById('clear')

let newNum      = '';
let firstNum    = '';
let secondNum   = '';
let operator    = '';
let operation   = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        value = button.value;
        assignButtons(button); 
    });
});


function assignButtons(button) {
    if (button.classList.contains('number')) {
            newNum += value;
            input.textContent = newNum;
    } else if (button.classList.contains('operator')){
            if  (firstNum === ''){
                    firstNum = newNum;
                    operator = value;
                    running.textContent = firstNum + value
                    clearInput(newNum);
            }else if (firstNum !=''){
                    secondNum = newNum;
                    operator  = value;
                    doMath(firstNum, operator, secondNum)
            }
    } else if (button.classList.contains('equal')){
            if (newNum !== '' && firstNum !==''){
                secondNum = newNum;
                operator  = '';
                doMath(firstNum, operator, secondNum)  
            }

    }
}

function doMath(a, operation, b){
    if (running.textContent != '' && secondNum != '')
        operation = running.textContent.slice(-1);
        console.log(operation);
        a = parseInt(firstNum);
        console.log(a);
        b = parseInt(secondNum);
        console.log(b);
        if (operation === '+'){
            input.textContent = a + b;
            firstNum = input.textContent
            getReadyAgain(input.textContent, operator);
        }else if (operation === '-'){
            input.textContent = a - b;
            firstNum = input.textContent
            getReadyAgain(input.textContent, operator);
        }else if (operation === '÷') {
            input.textContent = a / b;
            firstNum = input.textContent
            getReadyAgain(input.textContent, operator);
        }else if (operation === '*'){
            input.textContent = a*b;
            firstNum = input.textContent
            getReadyAgain(input.textContent, operator);
    }
}

function getReadyAgain(firstNum, operator){
    running.textContent = firstNum + operator;
    newNum = '';
}

function clearInput(){
    input.textContent = '';
    newNum = '';
}

clear.addEventListener('click', () => {
    clearDisplay();
});

function clearDisplay() {
        newNum               = '';
        firstNum             = '';
        secondNum            = '';
        operator             = '';
        input.textContent    = '0';
        running.textContent  = '';
 };