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
function Hello3(a,b){
    z=a+b;
    return z;
    
    
    }
    
   let answer =Hello3(50,34);
   console.log(answer);
   
    console.log(Hello3());// this will print (Nan)
    // because when you call Hello3() in console.log(Hello3());,
    // you are not passing any arguments. The function expects two arguments 
    //(a and b), and since you didn't provide any, a and b are both undefined. 

    
    