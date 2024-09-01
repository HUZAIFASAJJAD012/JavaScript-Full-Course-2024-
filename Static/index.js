//  Static =
/*  
The static keyword in JavaScript is used to define properties and methods on a class itself,
 rather than on instances of the class. When something is declared as static, 
 it belongs to the class itself and not to any particular instance created from the class. */
class Car {


  

 static display(name,model,price) {
    console.log(name);
    console.log(model);
    console.log(price);
  }

  
 static discount(price) {
  
  console.log(price-156750);
}
}


Car.display(`honda`,`civic`,1231231231);
Car.discount(1231231231);
 