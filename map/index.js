//map

/* accepts a callback and applies that function to each element of array the return a new array  */

const number = [2, 3, 4, 5, 6, 7, 8, 9];

const multi = number.map(sum);

console.log(multi.map(sum));

function sum(element) {
  return element * 2;
}

const students = ["ali", "huzaifa", "tanveer"];

const uper = students.map(upperCase);
console.log(uper);
function upperCase(element) {
  return element.toUpperCase();
}

