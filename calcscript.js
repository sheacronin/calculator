// Functions for mathematical operations.
function add(a, b) {
	return Math.round((a + b) * 100) / 100;
}

function subtract(a, b) {
	return Math.round((a - b) * 100) / 100;
}

function multiply(a, b) {
    return Math.round((a * b) * 100) / 100;
}

function divide(a, b) {
    if (b === 0) {
        console.log('divide by 0');
        setTimeout(clearCalc, 1000);
        return 'nope!';
    } 

    return Math.round((a / b) * 100) / 100;
}

// Vairables for HTML elements.
const nums = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const screen = document.querySelector('#screen');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const allCalcButtons = document.querySelectorAll('.calc-button')

// Variables to store needed data.
let a = '';
let b = '';
let operator;
let displayingOperator = false; // Boolean to tell if nums should be part of a or b.
let displayingResult = false; // Booleon to check if number is result of operation.

// Function to run when num button is clicked.
function displayNum(e) {
    const clickedNum = e.target.textContent;
    if (displayingOperator) b += clickedNum;
    
    if (displayingResult) {
        screen.textContent = clickedNum;
        displayingResult = false;
    } else {
        screen.textContent += clickedNum;
    }
    console.log(`Display Num. B = ${b}`);
}

// Function to run if operator button is clicked.
function displayOperator(e) {
    a = screen.textContent;

    // Make sure user doesn't enter two operators in a row
    // Or an operator before an a num.
    if ((displayingOperator && !b) | !a) { 
        console.log('Incorrect operator placement');
        return;
    }

    if (b) { // Check if there are already 2 nums being operated.
        operate();
        a = screen.textContent;
    }

    const clickedOperator = e.target.textContent;
    screen.textContent += clickedOperator;

    operator = e.target.id;
    displayingOperator = true;
    displayingResult = false;
    console.log(`Display Operator. A = ${a} | Operator = ${operator}`);
}

// Function to run if equals button is clicked.
function operate() {
    if (!displayingOperator | a === '' | b === '') {
        console.log('Not enough info to operate.')
        return;
    }
    
    a = parseFloat(a);
    b = parseFloat(b);

    console.log(a + ' ' + operator + ' ' + b);

    displayingOperator = false;

    screen.textContent = window[operator](a, b);
    displayingResult = true;

    a = '';
    b = '';
    displayingOperator = false;

    console.log(`Operated.`);
}

// Function to run if clear button is clicked.
function clearCalc() {
    screen.textContent = '';
    a = '';
    b = '';
    displayingOperator = false;

    console.log(`Calc cleared.`)
}

function runBtnPressAnimation(e) {
    e.target.classList.remove('pressed-button');
    e.target.offsetHeight;
    e.target.classList.add('pressed-button');
}

allCalcButtons.forEach(btn => btn.addEventListener('click', runBtnPressAnimation));

nums.forEach(num => num.addEventListener('click', displayNum));
operators.forEach(operator => operator.addEventListener('click', displayOperator));

equals.addEventListener('click', operate);

clear.addEventListener('click', clearCalc);