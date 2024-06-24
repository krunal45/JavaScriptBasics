/*
Absolutely! Let's test your understanding of  `if` statements in JavaScript. 

Imagine you have a program that asks the user for their age. You want to display a message depending on their age.
If the user's age is 18 or older, you want to display "You are an adult!". 
Otherwise, you want to display "You are not an adult yet.". 

Can you write the JavaScript code to achieve this using an `if` statement? 
*/
function printMessage(age){
    if(age>=18)
        console.log('You are an adult!');
    else
        console.log('You are not an adult yet.');    
}

let age=17;
printMessage(`${age}`);