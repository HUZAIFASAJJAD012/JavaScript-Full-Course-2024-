// let nameInput = document.getElementById('name');


// nameInput.addEventListener('change', function(event) {

//     let userName = event.target.value;

  
//     let message = userName ? "You entered: " + userName : "You didn't enter anything.";
//     document.getElementById('text').textContent = message;

// });


document.getElementById("mysubmit").onclick=function(e){
    e.preventDefault(); // false refresh
let Name=document.getElementById("name2").value;

document.getElementById("text").textContent=Name;

}