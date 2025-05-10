//Question:
//You are given two arrays, arr1 and arr2, both containing integers. 
//Your task is to write a JavaScript function that takes these two arrays as input
//and returns a new array containing unique elements present in both arrays. 
//In other words, implement a function that finds the intersection of the two arrays and removes duplicates.

function getUniqueElements(arr1,arr2){
 let commonElements = new Set();
 commonElements.add(1,2);
 return commonElements;
}

let arr1 = [1,2,3,4,5];
let arr2 = [3,4,5,6,7];
console.log(`Common Elements between array ${arr1} and ${arr2} are :`+getUniqueElements(arr1,arr2).forEach((ele)=>{console.log(ele)}));
// function getSetEle(set1){
    
//     return set1;
// }

// let set1 = new Set();
// set1.add(1);
// set1.add(2);
// set1.forEach((ele)=>{console.log(ele)});