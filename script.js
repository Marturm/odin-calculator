let currentNumber = null, b = null, operator = null, result = null;

const display = document.querySelector(".display");
function populateDisplay(displayValue) {
    display.innerText = displayValue;
}

const btnAC = document.querySelector(".button-ac");
btnAC.addEventListener("click", () => {
    currentNumber = null, b = null, operator = null, result = null;
    populateDisplay(0)
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
const btnNumbers = [btnZero, btnOne, btnTwo, btnThree, btnFour, btnFive, btnSix, btnSeven, btnEight, btnNine];

btnNumbers.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(currentNumber === null || currentNumber == 0) {
            currentNumber = btn.getAttribute("data-number");
        }
        else if(currentNumber.length < 9){
            currentNumber += btn.getAttribute("data-number");
        }
        console.log("currentNumber: ", currentNumber);
        populateDisplay(currentNumber);
    });
});

const btnAdd = document.querySelector(".button-add");
const btnMultiply = document.querySelector(".button-multiply");
const btnSubtract = document.querySelector(".button-subtract");
const btnDivide = document.querySelector(".button-divide");
const btnOperators = [btnAdd, btnMultiply, btnSubtract, btnDivide];

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

btnOperators.forEach((btn) => {
    btn.addEventListener("click", () => {
        operator = btn.getAttribute("data-operator");
        console.log("operator:", operator);
    });
});

const btnEqual = document.querySelector(".button-equal"); 
