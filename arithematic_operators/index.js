


/*  JavaScript arithmetic operators are used to perform arithmetic on numbers. Here are the primary 
arithmetic operators along with their symbols:

1. Addition (+): Adds two numbers.
   Example: `5 + 3` results in `8`

2. Subtraction (-): Subtracts one number from another.
   Example: `5 - 3` results in `2`

3. Multiplication (*): Multiplies two numbers.
    Example: `5 * 3` results in `15`

4. Division (/): Divides one number by another.
   Example: `6 / 3` results in `2`

5. Modulus (%): Returns the remainder of a division operation.
   Example: `5 % 3` results in `2`

6. Exponentiation (**): Raises the first number to the power of the second number.
   xample: `5 ** 3` results in `125`

7. Increment (++): Increases a number by one.
   - Example: `let a = 5; a++` results in `a` being `6`

8. Decrement (--): Decreases a number by one.
   Example: `let a = 5; a--` results in `a` being `4`

*/

// sum +
let num=1;
let num2=10;

let sum =num+num2;


document.getElementById("sum").textContent= `the sum is ${sum}`;

// subtract -

let num3=13;
let num4=10;

let sub =num-num2;


document.getElementById("sub").textContent= `the Subtract is ${sub}`;





// Multi *

let num5=13;
let num6=10;

let  multi=num5*num6;


document.getElementById("multi").textContent= `the multi is ${multi}`;

// divide * 

let num7=13;
let num8=10;

let  div=num7 / num8;


document.getElementById("divide").textContent= `the divide is ${div} `;

// remainder %

let num07=13;
let num08=10;

let  R=num07%num08;


document.getElementById("Rem").textContent= `the remainder is ${R} `;




// power %

let num01=13;
let num02=10;

let  Power=num01**num02;


document.getElementById("pow").textContent= `the power is ${Power} `;


// Increment (++)

let num03=13;
num03++;





document.getElementById("Increment").textContent= `the Increment is ${num03} `;


// Decrement (--)

let num04=13;
num04--;





document.getElementById("Decrement").textContent= `the Increment is ${num04} `;