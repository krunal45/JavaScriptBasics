// Sure! Here's an intermediate-level JavaScript coding question for you:

// **Question:**

// You are given an array of integers. 
// Write a JavaScript function that finds the first non-repeating integer in the array.
// If there is no non-repeating integer, return `-1`.

// For example:
// ```javascript
// findFirstNonRepeating([4, 5, 1, 2, 0, 4, 5, 3, 1]) // should return 2
// findFirstNonRepeating([1, 2, 2, 1, 3, 3]) // should return  -1
// findFirstNonRepeating([7, 8, 8, 7, 6, 5, 6]) // should return 5
// ```

// Write the function `findFirstNonRepeating` that solves this problem efficiently.
// [1,2,1,3] > 2
// [1,1] > -1
// function findFirstNonRepeating(array1){
//    let repeatElements = []
//    for(let number of array1){
//     if((repeatElements.find(number))!=undefined){
//         repeatElements.push(number)
//     }
//    }
//    console.log(repeatElements)
// }

let arr1 = [1,2,1,3]
let num1 = arr1.filter((x,arr1)=>{arr1[x]!==arr1[x+1]})
console.log(num1)
// let num = findFirstNonRepeating(arr1)
// console.log(`Non Repeating integer is > `+num)

//const findFirstNonRepeating = (arr) => {
//     const count = new Map();

//     // Count the frequency of each number
//     arr.forEach((item) => {
//       count.set(item, (count.get(item) || 0) + 1);
//     });
  
//     // Find the first number with a count of 1
//     for (let num of arr) {
//       if (count.get(num) === 1) {
//         return num;
//       }
//     }
  
//     return -1; // Return -1 if no non-repeating number is found
//   };
  
//   // Example usage:
//   console.log(findFirstNonRepeating([4, 5, 1, 2, 0, 4, 5, 3, 1])); // Output: 2
//   console.log(findFirstNonRepeating([1, 2, 2, 1, 3, 3]));           // Output: -1
//   console.log(findFirstNonRepeating([7, 8, 8, 7, 6, 5, 6]));         // Output: 5
  