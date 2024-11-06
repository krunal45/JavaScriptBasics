// Sure! Here's an intermediate-level coding question on arrays in JavaScript:

// **Question:**  
// You are given an array of integers. Write a function that returns a new array with the same elements, 
//but the elements should be sorted in descending order, with all the odd numbers placed before the even numbers. 
//For example:

// ```javascript
// input: [12, 5, 8, 3, 7, 10]
// output: [7, 5, 3, 12, 10, 8]
// ```

// The odd numbers should appear first in descending order, followed by the even numbers in descending order.

 function sortArray(input){
  let oddNumbers=[],evenNumbers=[],output=[];
  for(let num of input){
      if(num %2===0)
        evenNumbers.push(num);
      else
        oddNumbers.push(num);    
  }
  oddNumbers.sort((a,b)=>b-a);
  evenNumbers.sort((a,b)=>b-a);
  output = oddNumbers.concat(evenNumbers);
  return output;
 }
/*
1.identify odd | even numbers
2.sort odd numbers in descending order
3.sort even numbers in descending order
4.integrate both
*/
const arr1 = [12, 5, 8, 3, 7, 10];
let output = sortArray(arr1);
console.log(output);