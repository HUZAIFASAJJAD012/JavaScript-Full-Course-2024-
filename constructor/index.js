//  constructor = 
/* constructor is a special function used to create and initialize objects. Constructors are fundamental in object-oriented 
programming and are typically used in conjunction with classes. */
function Car(name ,model,price){

    this.name=name;
    this.model=model;
    this.price=price;
    
    
    
    
    
    
};


const car1= new  Car('toyota',`toyoyta`,123412);




console.log(`${car1.name}   ${car1.model}   Rs ${car1.price}`);
