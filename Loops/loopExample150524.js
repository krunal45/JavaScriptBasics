/*
Write a JavaScript program to calculate the factorial of a given number using a loop.
*/
// 5! = 5*4*3*2*1
function factorial(number){
    let result=1;
    for(let i=2;i<=number;i++){
      result = result * i;
    }
    return result;
}

let number = 10;
console.log(`Factorial of ${number} is: `+factorial(number));