// -- Set Complement : 
//You are given a set of integers, originalSet, and a set of integers, subset. 
//Write a JavaScript function to find the complement of the subset with respect 
//to the originalSet. In other words, find all the elements in originalSet that 
//are not present in subset and return them as a new set.
//For example, if originalSet = [1, 2, 3, 4, 5] and subset = [3, 5], the complement should be [1, 2, 4].

function getComplement(set1,set2){
    let set = new Set();
    for(let val of set1){
        if(!set2.has(val)){
           set.add(val);
        }
    }
    return set;
}

let set1 = new Set([1,2,3,4,5]);
let set2 = new Set([2,3]);
let set = getComplement(set1,set2);
console.log(set1);
console.log(set2);
console.log(set);