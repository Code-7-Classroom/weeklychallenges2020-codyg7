var num = prompt("Please give me a number from 1-12");
let month = [
  "january",
  "febuary",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december"
];

if (num == "1") {
  console.log(`${month[0]}`);
} else if (num == "2") {
  console.log(`${month[1]}`);
} else if (num == "3") {
  console.log(`${month[2]}`);
} else if (num == "4") {
  console.log(`${month[3]}`);
} else if (num == "5") {
  console.log(`${month[4]}`);
} else if (num == "6") {
  console.log(`${month[5]}`);
} else if (num == "7") {
  console.log(`${month[6]}`);
} else if (num == "8") {
  console.log(`${month[7]}`);
} else if (num == "9") {
  console.log(`${month[8]}`);
} else if (num == "10") {
  console.log(`${month[9]}`);
} else if (num == "11") {
  console.log(`${month[10]}`);
} else if (num == "12") {
  console.log(`${month[11]}`);
} else {
  alert("You entered an invalid number!");
}
