let numbers = [];
let operator = null;
let currentValue = 0;
let displayValue = "0";

const display = document.querySelector(".display");

function populateDisplay() {
    display.innerText = displayValue;
}

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

const btnAC = document.querySelector(".button-ac");

btnAC.addEventListener("click", () => {
    numbers = [];
    operator = null;
    currentValue = 0;
    displayValue = "0";
    populateDisplay()
});

// const btnPoint = document.querySelector(".button-point");

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
        if(currentValue === null) {
            displayValue = btn.getAttribute("data-number");
        }
        else if(displayValue.length == 1 && displayValue == "0") {
            displayValue = btn.getAttribute("data-number");
        }
        else if(displayValue.length < 9){
            displayValue += btn.getAttribute("data-number");
        }
            currentValue = Number(displayValue);
        populateDisplay();
    });
})

const btnAdd = document.querySelector(".button-add");
const btnMultiply = document.querySelector(".button-multiply");
const btnSubtract = document.querySelector(".button-subtract");
const btnDivide = document.querySelector(".button-divide");

const btnOperators = [btnAdd, btnMultiply, btnSubtract, btnDivide];

btnOperators.forEach((btn) => {
    btn.addEventListener("click", () => {
        numbers.push(currentValue);
        operator = btn.getAttribute("data-operator");
        currentValue = null;
    })
});


