


document.getElementById("btn").onclick=function(){
    let age=document.getElementById("age").value;
    if(age>=18){

   document.getElementById("text").textContent=`your age is  ${age} your are 18+`;

    }
else{



    document.getElementById("text").textContent=`your age is ${age} your are not 18+ `;

}



}

