// this keyword =  

/* In JavaScript, this is a special keyword that refers to the context in which a function is executed.
 The value of this can vary depending on how a function is called. Understanding this is crucial for working 
 with objects and functions effectively. */


const  data={

Name:`huzaifa`,
Age:23,
PhoneNumber:'03335494995',
Disply:function(){

console.log(`you Name is ${this.Name} and age is ${this.Age} and  Phone Number is ${this.PhoneNumber} `)



}

}



data.Disply();
