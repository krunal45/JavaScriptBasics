// Write a function called processArray that takes an array of numbers and a callback function. 
// The function should apply the callback to each number in the array and return a new array with the results. 
// Provide an example of using processArray to double each number in the array.
function processArray(numbers,callback) {
    let result = [];
    result = numbers.map(number=>callback(number));
    return result;
};

function doubleEachNumber(number) {
    return (number * 2);
};

// function multiplyByFive(number) {
//     return (number * 5);
// };

const numbers = [1,2,4];
const result = processArray(numbers,doubleEachNumber);
console.log(`double of each number in ${numbers} is :`,result);