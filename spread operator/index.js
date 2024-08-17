// spread operator = ...array upacks the elements


let array = [1,2,3,44,5,6];

let max=Math.max(...array);
let max1=[...array].join("_")
console.log(max1);


// add two arrays

// let array1 = [1,2,3,44,5,6];
// let array2 = [33,24,35,44,52,63];

// let add=[...array1,...array2];
// console.log(add);


let array4 = [1,2,3,44,5,6];
let array3 = ["33","24","35","44","52","63"];

let add2=[...array3,parseInt(...array4)];
console.log(add2);