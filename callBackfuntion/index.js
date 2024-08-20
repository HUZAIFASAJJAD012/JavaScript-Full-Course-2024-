// callback funtion = 
/* A callback function is a function that is passed as an argument to another function and is executed after 
some kind of event or operation has been completed. The callback is "called back" at a later point in time 
within the containing function, which allows you to ensure that certain code only runs after a specific operation
 has been completed.  */

hi(bye);


 function hi(callback){


console.log("hi");

callback();


 }


 function bye(){


    console.log("bye");



 }




 // add two numbers
