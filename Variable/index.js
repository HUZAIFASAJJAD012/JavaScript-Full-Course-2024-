/*  
In JavaScript, variables are used to store data values. You can think of a variable as a container that holds
information that can be referenced and manipulated in your program. 
*/

/* var:

Scope: Variables declared with var are function-scoped, meaning they are only
accessible within the function in which they are declared. If declared outside 
a function, they are globally scoped.


*/

/* 
let:

Scope: Variables declared with let are block-scoped, 
meaning they are only accessible within the block (enclosed by {}) where they are defined.


*/

/* 
const:
Scope: Like let, const is block-scoped. 
 */

/* 
Variable Naming Rules

Letters, Digits, Underscores, and Dollar Signs: Variable names can include letters, digits, 
underscores (_), and dollar signs ($). However, they cannot start with a digit.

Case Sensitivity:
Variable names are case-sensitive. myVariable and myvariable are considered different variables.

Reserved Words: You cannot use JavaScript reserved words (like break, for, if, etc.) as variable names.
 */

/* 
Variable Initialization

let a = 5; // Declaration and initialization
let b;     // Declaration
b = 10;    // Initialization



 */

// Now code

let x = 10; // Declaration and initialization
x = 30;
document.getElementById("Text").textContent = x;
console.log(x);

let a; // Declaration
a = 20; // Initialization

document.getElementById("Text2").textContent = a;
console.log(a);

//for example i want ot add student data

let age = 20;
let Name = "huzaifa";

let fee = 20000;


//witout ``` 
console.log(` your ${age}` );
console.log(typeof age ) // for type print 

// document.getElementById("Text2").textContent=``; =
//   "your age" + age + "name is " + Name + "fee is " + fee;

document.getElementById("Text2").textContent=`your name ${Name} and age ${20} and your fee is ${fee}`;



// data types 
/*
String:
The string data type in JavaScript is used to represent textual data.
 A string is a sequence of characters (letters, digits, symbols, whitespace, etc.)
  enclosed within single quotes (' '), double quotes (" "), or backticks (\``).



*/