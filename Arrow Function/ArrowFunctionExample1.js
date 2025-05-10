// Example 1
const addTwo = (num1,num2) =>  num1 + num2
console.log(addTwo(2,3));

// Example 2 > Returning Objects
const userName = () => ({userName:"Krunal"})
console.log(userName());

// 'this' keyword context
const student = {
    name: 'Ajay',
    age:10,
    gender: 'male',
    message: function(){
        console.log(`Hey ${this.name} welcome to school!`);
    }
}
console.log('name: ',student.name);
console.log('age: ',student.age);
console.log('gender: ',student.gender);
console.log('Message: ',student.message());

//Example 3
const numbers = [1,2]
let squaredNumbers = []
squaredNumbers = numbers.map((number)=>number*number)
console.log(squaredNumbers);