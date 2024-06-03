/*
Sure! Here's a beginner-level coding question based on sets in JavaScript:

**Question:**

Write a JavaScript function that takes two arrays as arguments 
and returns a new array containing only the unique elements present
in both arrays, using sets.

For example:

```javascript
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(findUniqueElements(array1, array2)); // Output should be [3, 4, 5]
```

Remember to keep it simple and beginner-friendly! Let me know if you need more details or explanations.
*/

function findUniqueElements(arr1,arr2){
    let arr3 = arr1 + arr2;
    console.log(arr3);
    // let set1 = new Set(arr3);
    // console.log(set1);
}

let arr1 = [1,2,3,4,1,2,];
let arr2 = [3,4,5,3,4];
findUniqueElements(arr1,arr2);
// console.log(findUniqueElements(arr1,arr2));