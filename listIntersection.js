// Write a JavaScript function that takes two input lists (arrays) and returns a new array that contains
//  the intersection of the elements from both lists. In other words, it should return an array containing
//   elements that are present in both input lists, without any duplicates.

function arrayIntersection(arr1,arr2){
    let res = [];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
          if(arr1[i]===arr2[j]){
            if(!res.includes(arr2[j])){
            res.push(arr2[j]);}
          }
        }
    }
    return res;
}

let arr1 = [1,2,1,4];
let arr2 = [1,2,2,3,4];
console.log('Common Elements of '+arr1+' & '+arr2+' are :'+arrayIntersection(arr1,arr2));

//alternative way : 
// function arrayIntersection(arr1, arr2) {
//     const set1 = new Set(arr1);
//     const set2 = new Set(arr2);
//     const intersection = [];

//     for (const item of set1) {
//         if (set2.has(item)) {
//             intersection.push(item);
//         }
//     }

//     return intersection;
// }

// let arr1 = [1, 2, 1, 4];
// let arr2 = [1, 2, 2, 3, 4];
// console.log('Common Elements of ' + arr1 + ' & ' + arr2 + ' are :' + arrayIntersection(arr1, arr2));
