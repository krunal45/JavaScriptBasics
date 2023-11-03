// Given an unsorted array of integers, find the pair of elements that sum to a given target value.

// For example, if the input array is [1, 3, 5, 2, 1] and the target value is 6, the output should be [3, 3], since the pair of elements 3 and 3 sum to the target value 6.

// This problem can be solved in O(n) time and O(n) extra space using a hash table. The following is a pseudocode solution:

// def find_pair_summing_to_target(array, target):
//   hash_table = {}

//   for element in array:
//     if target - element in hash_table:
//       return [target - element, element]
//     else:
//       hash_table[element] = True

//   return None
function getPairElements(target,array){
    for(let num of array){ // Iterate over the array.
     if((array.includes(target - num))){ // If the target value minus the current element is found in the array, then return the pair of elements.
          return [(target-num),num];
     }
    }
    return -1; // If no pair of elements is found, then return -1.
 }
 
let arr1 = [1,3,6,77];
console.log('Element pair is :'+getPairElements(78,arr1));