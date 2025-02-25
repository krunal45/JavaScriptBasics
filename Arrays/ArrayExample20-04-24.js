/*
Certainly! Here's a coding problem based on arrays in JavaScript:

Write a function in JavaScript that takes an array of numbers as input and returns the sum of all the positive numbers in the array.
*/

function getSum(arr1){
 return arr1.reduce((sum,num)=>{
    if(num > 0){
       return sum + num;}
    else{
       return sum;
    }}
    ,0);
}

let arr1 = [1,3,5,-1,-2,4];
console.log(`Sum of positive numbers in ${arr1} is:`+getSum(arr1));