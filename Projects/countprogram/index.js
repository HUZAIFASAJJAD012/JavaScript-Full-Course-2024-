// number guessing game

const minNum=1;
const maxNum=100;
const answer=Math.floor(Math.random()*(maxNum-minNum+1)+minNum);

let attempts =0;
let guess;
let running =true;


while(running){

guess=window.prompt(`guess the number between ${minNum}-${maxNum}`)
guess=Number(guess);


if(isNaN(guess)){

window.alert("please enter valid number ");


}else if(guess<minNum || guess>maxNum){



    window.alert("please enter valid number ");
}

else{
attempts++;

if(guess<answer){
    window.alert("too low");
    
}else if(guess>answer){
    window.alert("too high");
    
}else
{

    window.alert(`your answer is ${answer} it takes ${attempts} attempts`);

}



}




running=false;
}