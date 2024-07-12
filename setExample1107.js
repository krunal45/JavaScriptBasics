/*
Sure, here's an intermediate-level JavaScript question related to sets:

**Question:**

You are given two arrays, `array1` and `array2`, each containing a list of integers.
Write a function in JavaScript to find and return the intersection of these two arrays
using sets. The intersection of two arrays is a new array containing distinct common elements
that appear in both arrays.

For example, if `array1 = [1, 2, 2, 1]` and `array2 = [2, 2]`, then the intersection would be `[2]`.

Remember, sets automatically handle duplicates and ensure uniqueness of elements.

Write a JavaScript function `findIntersection(array1, array2)` that implements this.

This question tests your understanding of how to use sets in JavaScript to efficiently 
find common elements between arrays while ensuring uniqueness.
*/
function findIntersection(array1, array2){
 let set1 = new Set();
 let array3 = array1.concat(array2);
 for(let value of array3){
     set1.add(value);
 }
 console.log(set1)
 return set1;
}

let array1 = [1,2];
let array2 = [2,2];
let set = findIntersection(array1,array2);
let iterator = set.entries();
for(let entry of iterator){
    console.log(entry[1]);
}

// set.forEach(e=>console.log('Hey '+'e'));
// console.log(`Common elements between ${array1} and ${array2} is:`+set.forEach(e=>console.log(e)));

//Option 2 > Better option
// function findIntersection(array1, array2) {
//     let set1 = new Set();
    
//     // Loop through array1
//     for (let value of array1) {
//         // Check if the value exists in array2
//         if (array2.includes(value)) {
//             set1.add(value); // Add it to the Set if it's in both arrays
//         }
//     }
    
//     return set1;
// }

// let array1 = [1, 2];
// let array2 = [2, 2];
// let set = findIntersection(array1, array2);

// console.log(set); // Outputs: Set { 2 }

// let iterator = set.values(); // Using values() instead of entries() to iterate over Set
// for (let value of iterator) {
//     console.log(value); // Outputs: 2
// }