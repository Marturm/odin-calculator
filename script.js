let currentNumber = 0, 
    operationNumber = null, 
    operatorNumber = null,
    operator = false, 
    operatorValue = null, 
    result = null;

const display = document.querySelector(".display");
function populateDisplay(displayValue) {
    display.innerText = displayValue;
}

const btnAC = document.querySelector(".button-ac");
btnAC.addEventListener("click", () => {
    currentNumber = 0, 
    operationNumber = null, 
    operatorNumber = null,
    operator = false, 
    operatorValue = null, 
    result = null;
    populateDisplay(0)
    console.clear();
});

const btnBack = document.querySelector(".button-backspace");
btnBack.addEventListener("click", () => {
    if(display.innerText.length > 1) {
        currentNumber = currentNumber.slice(0, -1);
    }
    else{
        currentNumber = 0;
    }
    if(!operator) {
        operationNumber = currentNumber;
        console.log("operationNumber:", operationNumber)
    }
    else {
        operatorNumber = currentNumber;
        console.log("operatorNumber:", operatorNumber)
    }
    populateDisplay(currentNumber);
});

const btnNine = document.querySelector(".button-nine");
const btnEight = document.querySelector(".button-eight");
const btnSeven = document.querySelector(".button-seven");
const btnSix = document.querySelector(".button-six");
const btnFive = document.querySelector(".button-five");
const btnFour = document.querySelector(".button-four");
const btnThree = document.querySelector(".button-three");
const btnTwo = document.querySelector(".button-two");
const btnOne = document.querySelector(".button-one");
const btnZero = document.querySelector(".button-zero");
const btnPoint = document.querySelector('.button-point');
const btnNumbers = [btnZero, btnOne, btnTwo, btnThree, btnFour, btnFive, btnSix, btnSeven, btnEight, btnNine, btnPoint];

btnNumbers.forEach((btn) => {
    btn.addEventListener("click", () => {
        let enteredNumber = btn.getAttribute("data-number");
        
        if(enteredNumber != '.'){
            if((currentNumber === null || currentNumber == 0) && String(currentNumber).indexOf('.') == -1) {
                currentNumber = enteredNumber;
            }
            else if(String(currentNumber).length < 9){
                currentNumber += enteredNumber;
            }
        }
        else if(String(currentNumber).indexOf('.') == -1) {
            if(currentNumber == 0 && enteredNumber == '.'){
                currentNumber += enteredNumber;
            }
            else {
                currentNumber += enteredNumber;
            }
        }
        else console.log(123)
        
        populateDisplay(currentNumber);

        if(!operator) {
            operationNumber = currentNumber;
            console.log("operationNumber:", operationNumber)
        }
        else {
            operatorNumber = currentNumber;
            console.log("operatorNumber:", operatorNumber)
        }
    });
});



const btnAdd = document.querySelector(".button-add");
const btnMultiply = document.querySelector(".button-multiply");
const btnSubtract = document.querySelector(".button-subtract");
const btnDivide = document.querySelector(".button-divide");
const btnOperators = [btnAdd, btnMultiply, btnSubtract, btnDivide];

btnOperators.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(operator) {
            btnEqual.dispatchEvent(new Event('click'))
        }
        operatorValue = btn.getAttribute("data-operator");
        operator = true;
        currentNumber = 0;
        console.log("operatorValue:", operatorValue);
    });
});

const btnEqual = document.querySelector(".button-equal"); 

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    switch (operator){
        case "+":
            return add(a, b);
        case "-":
            return subtract(a ,b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

btnEqual.addEventListener("click", () => {
    operationNumber = Number(operationNumber);
    operatorNumber = Number(operatorNumber);
    currentNumber = 0;
    operator = false;
    if(operatorValue == '/' && operatorNumber == 0) {
        result = 0;
        populateDisplay("ERROR");
        operationNumber = 0;
    }
    else {
        result = operate(operationNumber, operatorNumber, operatorValue);
        
        if(result === undefined) {
            result = 0;
        }

        if(String(result).length > 9) {
            result = result.toFixed(8);
            if(result == 0) {
                result = 0;
            }
        }

        operationNumber = String(result);
        
        if(result > 999999999){
            result = Number.parseFloat(result).toExponential(3);
        }
        else if(String(result).length > 9) {
            result = String(result).slice(0, 10);
        }
    
        populateDisplay(result);
    }

    console.log("result: ", result)
    console.log("operationNumber: ", operationNumber)
    console.log("operatorNumber: ", operatorNumber)
    console.log("operatorValue: ", operatorValue)
});