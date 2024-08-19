/*Rest parameters in JavaScript allow you to represent an indefinite number of arguments as an array.
  This is particularly useful when you're dealing with functions that need to handle a 
  variable number of arguments.  */

function Gun(...Guns) {
  console.log(Guns);
}

const gun1 = "shotgun";
const gun2 = "pistel";
const gun3 = "Ak47";

Gun(gun1, gun2, gun3);


// add number 



function sum(...numbers){

let result=0;
for(let number of numbers){

result+=number;

}
 return result;




}

const total=sum(1,2,3,45,6,7,8,9);

console.log(total);


// get average

function Getaverage(...numbers){

let result=0;
for(let number of numbers){

result+=number;

}
return result /numbers.length;


}

const  total3=Getaverage(1,23,4,5,6,6,6)
console.log(parseInt(total3));



// two strings values combine 


function Getstring(...String){

return String.join('');




}


const fullname=Getstring('Huzaifa',"Sajjad");


console.log(fullname);