// 1. Function without any return type.
function greet(){
   console.log('Hello');
}

greet();

// 2. Function with return type.
function greet(){
    return "Hello from second";
}
var str = greet();
console.log(str);

// 3. Function with parameter
function add(num1,num2){
    return (num1 + num2)
}
let num1 = 4,num2 = 5
console.log(`Addition of ${num1} and ${num2} is : `+add(num1,num2));