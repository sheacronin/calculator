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

const nums = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const screen = document.querySelector('#screen');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');

let a = '';
let b = '';
let operator;
let displayingOperator = false; // Boolean to tell if nums should be part of a or b.
let displayingResult = false; // Booleon to check if number is result of operation.

function displayNum(e) {
    const clickedNum = e.target.textContent;
    if (displayingOperator) b += clickedNum;
    
    if (displayingResult) {
        screen.textContent = clickedNum;
        displayingResult = false;
    } else {
        screen.textContent += clickedNum;
    }
    console.log(`display num. A: ${a}, Operator: ${operator}, B: ${b}`);
}

function displayOperator(e) {
    if (displayingOperator) { // Check if there are already 2 nums being operated.

    }

    a = screen.textContent;

    const clickedOperator = e.target.textContent;
    screen.textContent += clickedOperator;

    operator = e.target.id;
    displayingOperator = true;
    console.log(`display operator. A: ${a}, Operator: ${operator}, B: ${b}`);
}

function operate() {
    a = parseInt(a);
    b = parseInt(b);

    console.log(a + ' ' + operator + ' ' + b);

    displayingOperator = false;

    screen.textContent = window[operator](a, b);
    displayingResult = true;

    a = '';
    b = '';
    displayingOperator = false;

    console.log(`operate. A: ${a}, Operator: ${operator}, B: ${b}`);
}

function clearCalc(e) {
    screen.textContent = '';
    a = '';
    b = '';
    displayingOperator = false;

    console.log(`clear Calc. A: ${a}, Operator: ${operator}, B: ${b}`)
}

nums.forEach(num => num.addEventListener('click', displayNum));
operators.forEach(operator => operator.addEventListener('click', displayOperator));

equals.addEventListener('click', operate);

clear.addEventListener('click', clearCalc);