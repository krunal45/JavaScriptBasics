// You are given two arrays, array1 and array2, both containing integers. 
//Write a JavaScript function that finds the intersection of these two arrays,
// i.e., the elements that are common to both arrays. Return the intersection as a new array.
// For example, if array1 = [1, 2, 3, 4, 5] and array2 = [3, 4, 5, 6, 7], the intersection should be [3, 4, 5].

function getCommonElements(arr1,arr2){
    let arr = [];
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    for(let val of set1){
        if(set2.has(val)){
            arr.push(val);
        }
    }
    return arr;
}

let arr1 = [1,5,4,2,3];
let arr2 = [2,3,4,5,5,5,6];
console.log(`Common Elements between ${arr1} & ${arr2} is :`+getCommonElements(arr1,arr2));