// Sure! Here's an intermediate-level JavaScript question for you:

// ### Question:
//  Given an array of integers, write a function `findTwoSum(nums, target)`
//  that returns the indices of the two numbers that add up to a specific `target`.
//  Assume that each input would have exactly one solution, and you may not use the same element twice.

// #### Example:
// ```javascript
// findTwoSum([2, 7, 11, 15], 9); // Should return [0, 1]
// ```

// ### Constraints:
// - You must solve it in O(n) time complexity.
// - You can assume that the array contains only unique elements.

// ---

// Try to solve it efficiently using a hash map!

// function findTwoSum(nums, target){
// let map = new Map()
// let complement = 0
// for(let i=0;i<nums.length;i++){
//     complement = target - nums[i]
//     if(map.has(complement))
//         return [map.get(complement),i]

//     map.set(nums[i],i)    
// }
// }


// let nums = [2, 7, 11, 15]
// let target = 9
// let indices = []
// indices = findTwoSum(nums,target)
// console.log('Indices > '+indices)

let map = new Map()
map.set(0,2)
map.set(1,3)
console.log(map.get(2))