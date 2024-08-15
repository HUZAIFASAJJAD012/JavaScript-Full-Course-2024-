let input = document.getElementById("input");
let tofahn = document.getElementById("fahrenheit");
let tocelsius = document.getElementById("celsius");
let result = document.getElementById("result");
let temp;

function convert() {
  if (tofahn.checked) {
    temp = Number(input.value);
    temp = (temp * 9) / 5 + 32;

    result.textContent = `${temp} F`;
  } else if (tocelsius.checked) {
    temp = Number(input.value);
    temp = (temp - 32) * (5 / 9);

    result.textContent = `${temp} c`;
  } else {

    result.textContent = `select unit `;

  }
}

