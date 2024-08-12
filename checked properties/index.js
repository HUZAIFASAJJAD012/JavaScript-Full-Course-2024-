
const suvcheck=document.getElementById("sub");

const visaclick=document.getElementById("visa");
const easypaisa=document.getElementById("easypaisa");
const jazchase=document.getElementById("jazchase");
const result=document.getElementById("result");

document.getElementById("Submit").onclick=function(){




    if(suvcheck.checked){

if(visaclick.checked){



        result.textContent="select visa Subscribe" 



}
else if(easypaisa.checked){



 result.textContent="select easypaisa Subscribe"



}

else if(jazchase.checked){



    result.textContent="select jazchase Subscribe"
   
   
   
   }



















    }
    else{


        result.textContent="first select Subscribtion"

    }






























};