function min(num1, num2) {
  if (num1 > num2) {
    console.log(num2);
  } else {
    console.log(num1);
  }
}

var num1 = parseInt(prompt("please give me a number"));
var num2 = parseInt(prompt("please give me another number"));
var minimum = min(num1, num2);
console.log(minimum);
