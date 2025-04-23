
// ### ❓ **Question:**

// **"Given an array of integers, write a function in JavaScript that returns the two numbers that add up
//  to a given target. If no such pair exists, return `null`

// **Example:**
// ```js
// Input: nums = [2, 7, 11, 15], target = 9  
// Output: [2, 7]
// ```
function getNumbers(array, target) {
    const seen = new Set();
    for (let num of array) {
        const complement = target - num;
        if (seen.has(complement)) {
            return [complement, num];
        }
        seen.add(num);
    }
    return null;
}

let arr1 = [2, 7, 11, 15]
let target = 26
console.log(getNumbers(arr1,target));