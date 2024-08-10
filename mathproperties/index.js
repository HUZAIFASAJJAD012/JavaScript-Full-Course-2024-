//math =build object which provides a collection of properties and methods 



let x=5;

let y=5.5;

let z;


z=Math.round(x);

console.log(z);
z=Math.floor(y);

console.log(z);



z=Math.trunc(y);// trunc remove decimal portion 

console.log(z);



z=Math.pow(y,x);// find power Math.pow(number,powernumber)

console.log(z);


z=Math.sqrt(x);// find square root 

console.log(z);



//fint max and min


let a=2;
let b=3;
let c=5;

let max=Math.max(a,b,c);

console.log(max);

let min=Math.min(a,b,c);

console.log(min);