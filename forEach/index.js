
// forEach() 
/* The forEach() method is a common array method in JavaScript used to execute a provided function once for each array element. 
It's often used for iterating over the elements of an array to perform actions, like logging them to the console, 
modifying each element, or applying some logic */



const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
});



const fruits = ['apple', 'banana', 'mango'];

fruits.forEach(fruit => console.log(fruit));



const animals = ['cat', 'dog', 'elephant'];

animals.forEach((animal, index) => {
  console.log(`${index}: ${animal}`);
});






const number=[1,2,3,4,5,6,7,8,9,10];

number.forEach(display);


function display(number){


    console.log(number);

}