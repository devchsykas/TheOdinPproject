const form = document.getElementById("calculator-form");
const display = document.getElementById("display");
const operandButtons = document.querySelectorAll("button[data-type=operand]");

let number1, number2;
let operator;

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, operator) {
  add(num1, num2, operator);
  subtract(num1, num2, operator);
  multiply(num1, num2, operator);
  divide(num1, num2, operator);
}

// console.log(add(2, 2));
// console.log(subtract(2, 2));
// console.log(multiply(2, 2));
// console.log(divide(2, 2));

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
