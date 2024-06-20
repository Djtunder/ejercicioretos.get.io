// script.js
let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        displayValue = '';
        shouldResetDisplay = false;
    }
    displayValue += number;
    document.getElementById('display').value = displayValue;
}

function setOperation(operation) {
    if (currentOperation !== null) {
        calculateResult();
    }
    firstOperand = parseFloat(displayValue);
    displayValue = '';
    currentOperation = operation;
    shouldResetDisplay = true;
}

function calculateResult() {
    if (currentOperation === null || displayValue === '') return;

    secondOperand = parseFloat(displayValue);
    let result;

    switch (currentOperation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }

    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
    currentOperation = null;
    firstOperand = result;
    shouldResetDisplay = true;
}

function clearDisplay() {
    displayValue = '';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    shouldResetDisplay = false;
    document.getElementById('display').value = '';
}