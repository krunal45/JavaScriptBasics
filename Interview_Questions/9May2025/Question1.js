// **Question:**
// Write a function in JavaScript that takes an array of integers and returns a new array 
// containing only the unique elements from the original array, **preserving their original order**.

// **Example Input:**

// ```javascript
// [1, 2, 2, 3, 4, 4, 5]
// ```

// **Expected Output:**

// ```javascript
// [1, 2, 3, 4, 5]
// ```

// **Constraints:**

// * Do not use `Set` or other built-in methods that automatically remove duplicates.
// * Focus on array iteration and logic.

// ---
function getUniqueNumbers(Input) {
    const seen = {}
    let output = []
    for (const num of Input) {
        if (!seen[num]) {
            seen[num] = true;
            output.push(num);
        }
    }
    return output
}

let nums = [1, 2, 2, 3, 4, 4, 5]
console.log(`Unique Values in Array from ${nums}: ${getUniqueNumbers(nums)}`);