 //This is my first JavaScript code!
 console.log ('Hello World');
 
 let name = 'Daphineliz'; //string literal
 console. log (name);

 let firstName =undefined; 
 let lastName = 'Musiimenta';
 console.log (firstName);
 console.log (lastName);

 //constants
 let interestRate = 0.3;
 interestRate = 1;
 console.log (interestRate);

 let age = 30; //number literal
 let isApproved = false; //boolean literal
 let selectedColour = null;

 //object
 let teacher = {
    Department: 'IT',
    idNo: 3003
 };
 //dot notation
 teacher.Department = 'LAW';
 console.log(teacher.Department);

 let selectedAnimals = ['dogs', 'rabbits'];
 selectedAnimals[2] = 6;
 console.log (selectedAnimals.length);

 //function for performing task

 function greet (name, secondName) {
    console.log('Hello ' + name + ' ' + secondName);
 }
 greet('John', 'Williams');
 greet('Mary', 'Adams');

 //function for calculating a value
 function square (number){
    return number * number;
 }
 console.log(square(4));