// array = a variable like   structure that can hold more than one values

let array = [16, 52, 43, 35, 62, 3];
// array.push(637); // add value at the  end of arry
// array.unshift(232); // add value it the start of the  array
// array.shift(); // remove value from the start of array
array.sort().reverse();
//for loop
for (let i = 0; i < array.length; i++) {
  array[i];
  console.log(array[i]);
}
console.log("/////////////////////////");
//for loop shortcut
for (let arrays of array) {
  console.log(arrays);
}
