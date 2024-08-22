// forEach()
/* The forEach() method is a common array method in JavaScript used to execute a provided function once for each array element. 
It's often used for iterating over the elements of an array to perform actions, like logging them to the console, 
modifying each element, or applying some logic */

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});



const fruits = ["apple", "banana", "mango"];

fruits.forEach((fruit) => console.log(fruit));

const animals = ["cat", "dog", "elephant"];

animals.forEach((animal, index, array) => {
  array[index] = animal.toUpperCase();
  console.log(array[index]);
});




const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
number.forEach(double);
number.forEach(display);

function double(element, index, array) {
  array[index] = element * 2;
}
function display(element) {
  console.log(element);
}





const animal2 = ["cat", "dog", "elephant"];

animal2.forEach((element, index, array) => {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
});

animal2.forEach(Display);
function Display(element) {
  console.log(element);
}
