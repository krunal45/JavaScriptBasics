// ### 🧠 JavaScript Array Interview Question

// **Problem:**
// Given an array of integers, return a new array such that each element at index `i` of the 
// new array is the product of all the numbers in the original array except the one at `i`.

// **Example:**

// ```javascript
// Input: [1, 2, 3, 4]
// Output: [24, 12, 8, 6]
// ```
// **Constraints:**

// * You must solve it without using division and in O(n) time.
// * The array length is at least 2 and at most 1000.([LeetCode][1], [LeetCode][2])

// ---
function product(input) {
    if (input.length < 2 || input.length>1000) {
        console.log('The array length should be at least 2 and at most 1000');
        return 'Error: Invalid Input'
    }
    let arrayLength = input.length;
    let result = new Array(arrayLength).fill(1);
    let prefixProduct = 1

    for(let i=0;i<arrayLength;i++){
        result[i] = prefixProduct;
        prefixProduct *= input[i]
    }

    let suffixProduct = 1
    for(let i=arrayLength - 1;i>=0;i--){
        result[i] *= suffixProduct;
        suffixProduct *= input[i]
    }

    return result
}

let input = [1,2,3,4]
console.log(`output: ${product(input)}`);