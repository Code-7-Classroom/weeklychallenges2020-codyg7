var num1 = parseInt(prompt("Please give me a number"));
var num2 = parseInt(prompt("Please give me another number"));
var operator = prompt("Would you like to add, subtract, multiply, divide");

function add(num1, num2, operator) {
  var add = num1 + num2;
  var operator = "add";
  console.log(num1 + "+" + num2 + "=" + add);
}
function subtract(num1, num2, operator) {
  var subtract = num1 - num2;
  var operator = "subtract";
  console.log(num1 + "-" + num2 + "=" + subtract);
}
function multiply(num1, num2, operator) {
  var multiply = num1 * num2;
  var operator = "multiply";
  console.log(num1 + "*" + num2 + "=" + multiply);
}
function divide(num1, num2, operator) {
  var divide = num1 / num2;
  var operator = "divide";
  console.log(num1 + "/" + num2 + "=" + divide);
}

if (operator == "add") {
  add(num1, num2, operator);
}
if (operator == "subtract") {
  subtract(num1, num2, operator);
}
if (operator == "multiply") {
  multiply(num1, num2, operator);
}

if (operator == "divide") {
  divide(num1, num2, operator);
}
