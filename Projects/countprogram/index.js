
let count=0;
let number=document.getElementById("number").textContent=count;


document.getElementById("add").onclick=function(){

    document.getElementById("number").textContent=count++;



}

document.getElementById("sub").onclick=function(){

    document.getElementById("number").textContent=count--;



}

document.getElementById("res").onclick=function(){
count=0;
    document.getElementById("number").textContent= count;



}
