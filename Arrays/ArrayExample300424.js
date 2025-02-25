/*
Of course! Here's a beginner-level coding question based on the concept of lists in JavaScript:

**Question:**
Write a JavaScript function that takes an array of numbers as input and returns a 
new array containing only the even numbers from the original array, in the same order.

For example, if the input array is `[1, 2, 3, 4, 5, 6]`, the output array should be `[2, 4, 6]`.
*/

function getEvenNumbers(numbers){
    numbers = numbers.filter((number)=>number%2===0);
 return numbers;
}

let numbers = [11,13,14,22,35,46,58];
console.log(`Even Numbers from ${numbers} are: `+getEvenNumbers(numbers));