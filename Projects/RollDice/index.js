

function rollDice(){
const numDice=document.getElementById('dice-input').value;
const diceresult=document.getElementById('result');
const values=[];
for (let i = 0; i < numDice; i++) {

    const value=Math.floor(Math.random()*6)+1;
console.log(value);
values.push(value);
}

diceresult.textContent=`dice:${values.join('')} `;



}
