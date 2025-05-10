// let name1 = 'Krunal' // Global variable
// function printName(){
//     console.log(name1);
// }
// printName();

function add(num1,num2=4){
    console.log(num1);
    console.log(num2);
    let num3=1; // Local variable
    return (num1+num2+num3);
}

// console.log(add(2,3));
console.log(add(2,6))