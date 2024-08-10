// random number 


// let random=Math.trunc(Math.random()*10)+1;

// console.log(random);

let max=100
let min=50;
let random=0;
document.getElementById("btn").onclick=function(){

random=Math.floor(Math.random()*(max-min))+min;

document.getElementById("ran").textContent=random;




}