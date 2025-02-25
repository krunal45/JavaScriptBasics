// Given an array of integers, find the maximum subarray sum. A subarray is a contiguous sequence of elements in the array.

// For example, if the input array is [-2, 1, -3, 4, -1, 2, 1, -5, 4], the output should be 6, since the maximum subarray sum is [4, -1, 2, 1].

// This problem can be solved in O(n) time and O(1) extra space using Kadane's algorithm. The following is a pseudocode solution:

// def find_maximum_subarray_sum(array):
//   current_sum = 0
//   max_sum = 0

//   for element in array:
//     current_sum = max(current_sum + element, 0)
//     max_sum = max(max_sum, current_sum)

//   return max_sum
function getMaxSubArraySum(array){
    let current_sum = 0; // Initialize the current sum variable.
    let max_sum = 0; // Initialize the maximum sum variable.
 
    for(num of array){ // Iterate over the array.
     current_sum = Math.max(current_sum + num, 0); // Calculate the current sum. If the current sum is less than 0, then reset it to 0.
     max_sum = Math.max(max_sum, current_sum); // Update the maximum sum variable if the current sum is greater than the maximum sum.
    }
 
    return max_sum; // Return the maximum sum variable.
 }
 

const arr1 = [2,10,-2,-3,3,8,1,1]
console.log('Max sum is :'+getMaxSubArraySum(arr1));