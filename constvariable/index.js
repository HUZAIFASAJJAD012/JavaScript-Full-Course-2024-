//const =a variable that can't be changed


// const PI=3.4545
// let radius;
// let circumference;

// radius=window.prompt("enter data");

// radius=Number(radius);


// circumference=2*PI*radius;
// console.log(circumference);
const pi=3.14159;
document.getElementById("Submit").onclick=function(){


let Name=document.getElementById("input").value;

let radius =parseFloat(  pi*Name);

document.getElementById("output").textContent=` the radius is ${radius}`;




}

console.log(pi);