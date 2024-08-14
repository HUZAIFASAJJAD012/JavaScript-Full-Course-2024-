/* 
Logical conditions in programming are expressions that evaluate to either true or false. 
They are often used in decision-making statements like if, while, for, and switch. Logical
 conditions involve logical operators to combine or compare values. */

let a = 5;
let b = 10;
if (a > 6 && b > 0) {
  console.log("Both numbers are positive");
} else {
  console.log("Both numbers are not positive");
}

let a1 = 5;
let b2 = -10;
if (a1 > 0 || b2 > 0) {
  console.log("At least one number is positive");
}

let isRaining = true;
if (!isRaining) {
  console.log("It is not raining");
} else {
  console.log("It is  raining");
}
