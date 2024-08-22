//map 

/* accepts a callback and applies that function to each element of array the return a new array  */




const number =[2,3,4,5,6,7,8,9];

const multi= number;

multi.map(sum);


console.log(multi.map(sum));



function sum(element){

    return element *2;



}

 