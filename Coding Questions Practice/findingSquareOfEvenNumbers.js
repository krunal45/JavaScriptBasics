//Question 1: Mapping and Filtering Arrays
//Create a function filterAndMap that takes an array of numbers and returns a
// new array containing the square of only the even numbers. 
//You should use the map and filter functions to achieve this. 
//The function should not modify the original array.

function filterAndMap(numbers){
    let evenNum = numbers.filter((n)=>n%2===0);
    let evenNumSquare = [];
    evenNumSquare = evenNum.map((v)=>v*v);
    return evenNumSquare;
}

let numbers = [1,2,3,4,5,6];
console.log('Square of Even Numbers out of:'+numbers+' is :'+filterAndMap(numbers));