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

function operate(operator, a, b) {
    console.log(a);
    return operator(a, b);
}

function sum(array) {
	return array.reduce(((sum, n) => sum + n), 0);
}

const nums = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const screen = document.querySelector('#screen');
const equals = document.querySelector('#equals');

let a;
let b;
let operator;

function displayNum(e) {
    const clickedNum = e.target.textContent;
    screen.textContent += clickedNum;
}

function displayOperator(e) {
    const clickedOperator = e.target.textContent;
    screen.textContent += clickedOperator;

    a = screen.textContent;
    operator = clickedOperator;
}

function getB() {
    // screen.textContent.splice(indexOf)
}

nums.forEach(num => num.addEventListener('click', displayNum));
operators.forEach(operator => operator.addEventListener('click', displayOperator));

equals.addEventListener('click', getB);
equals.addEventListener('click', () => operate(add, 1, 2));