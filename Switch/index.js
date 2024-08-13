// The switch statement is used in programming to execute one of many
//blocks of code based on the value of a variable or expression.
// It's an alternative to using multiple if-else statements when you have multiple conditions to check.

let day = parseInt(prompt("Please enter Day (1-7):", 0)); // Convert input to number
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day"; // Handles cases where input isn't 1-7
}

alert(dayName); // Display the result to the user

