// forEach()
/* The forEach() method is a common array method in JavaScript used to execute a provided function 
once for each array element. 
It's often used for iterating over the elements 
of an array to perform actions, like logging them to the console, 
modifying each element, or applying some logic
 but the forEach function change the arrauy value  */

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});



const fruits = ["apple", "banana", "mango"];

fruits.forEach((fruit) => console.log(fruit));

const animals = ["cat", "dog", "elephant"];

animals.forEach((animal, index, array) => {
  array[index] = animal.toUpperCase();
  console.log(array[index]);
});




const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
number.forEach(double);
number.forEach(display);
function double(element, index, array) {
  array[index] = element * 2;
}
function display(element) {
  console.log(element)
}





const animal2 = ["cat", "dog", "elephant"];

animal2.forEach((element, index, array) => {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
});

animal2.forEach(Display);
function Display(element) {
  console.log(element);
}






// function submitFile() {
//     // Prevent the default form submission
//     event.preventDefault();

//     // Get the file input element
//     var fileInput = document.getElementById("file-upload");
//     var file = fileInput.files[0];

//     // Check if a file is selected
//     if (file) {
//         var reader = new FileReader();
        
//         // Define what happens when the file is successfully read
//         reader.onload = function(event) {
//             // Get the file content
//             var fileContent = event.target.result;
            
//             // Split the content into lines (assuming it's a CSV file)
//             var lines = fileContent.split('\n');
            
//             // Log each line in the console
//             lines.forEach(function(line, index) {
//                 console.log('Line ' + (index + 1) + ': ' + line);
//             });
//         };
        
//         // Read the file as text
//         reader.readAsText(file);
//     } else {
//         console.log("No file selected");
//     }
//   }