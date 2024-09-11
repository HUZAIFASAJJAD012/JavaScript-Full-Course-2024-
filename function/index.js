// function = A section of reusable code 


let a=2;
let b=4;
let z;

function Hello(){
z=a+b;

console.log(z);


}

Hello();





function Hello2(a,b){
z=a+b;

console.log(z);


}

Hello2(10,11);

//or 
Hello4=function(){

return 'heloo word';


}
function  Hello3(){
    
    return 'heloo word';
    
    
    }
    
   let answer =Hello3(50,34);
   console.log(answer);
   console.log(Hello4());
    console.log(Hello3());// this will print (Nan)
    // because when you call Hello3() in console.log(Hello3());,
    // you are not passing any arguments. The function expects two arguments 
    //(a and b), and since you didn't provide any, a and b are both undefined. 

    
    function heloo()
{


    return 'Helloo word';


}

 function  createHelloWorld(heloo){



return  heloo;


}

createHelloWorld(heloo());



let counte=0;

var createCounter = function(n) {
let result=counte+n;
    return function() {
        
        return result++;

        
    };
};
const counter = createCounter(10);
counter()
const counter1 = createCounter(11);
const counter2 = createCounter(12);


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */


var createCounter = function(init) {
    let counter=init;
    
    increment = function(){
    
    return ++counter;
    };

    reset = function(){
    
    return counter;
    
    };
        
 decrement = function(){
    
    return --counter;
    
       } 
    
    };
    
    const count = createCounter(5)
    count.reset()
    counter.reset(); // 5
    counter.decrement(); // 4