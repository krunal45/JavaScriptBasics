// Simple Numeric array
let numbers = new Array();// Array Declaration
numbers = [2,3,4];// Array Initialization
console.log('--Length of Array-- :'+numbers.length);
let oddNums = new Array();
let evenNums = new Array();
console.log(numbers); 
for(let num in numbers){
if(numbers[num] %2 === 0){
    evenNums.push(numbers[num]);
}
else{
    oddNums.push(numbers[num]);
}
};
console.log('--Even Numbers--');
console.log(evenNums);
console.log('--Odd Numbers--');
console.log(oddNums);