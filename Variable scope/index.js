// Global Scope
//Variables declared outside of any function or block are in the global scope.
//These variables can be accessed and modified from anywhere in the code.

var globalVar = "I'm global";

function test() {
    console.log(globalVar); // Accessible here
}

test();
console.log(globalVar); // Also accessible here


//Function Scope
//Variables declared within a function are in the function scope.
//These variables are only accessible within the function in which they are declared.

function myFunction() {
  var functionVar = "I'm inside a function";
  console.log(functionVar); // Accessible here
}

myFunction();
// console.log(functionVar); // Error: functionVar is not defined


//Block Scope
//Variables declared with let or const inside a block (e.g., within curly braces {}) are in block scope.
//These variables are only accessible within the block in which they are define

if (true) {
  let blockVar = "I'm inside a block";
  console.log(blockVar); // Accessible here
}

// console.log(blockVar); // Error: blockVar is not defined
