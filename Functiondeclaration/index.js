// function declaration = define  a reusabl block of code that perform a specific task

function Hi() {
  console.log("heloo");
}

// funcrion expressions = a way to define function as values or variables

let fun = function Bye() {
  console.log("bye bye");
};

fun();

setTimeout(Hi, 3000);

// OR

setTimeout(function () {
  console.log("helooo g");
}, 4000);
