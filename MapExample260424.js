/*
Sure, here's a beginner-level coding question based on Maps concept in JavaScript:

**Question:**
Write a JavaScript function that takes an array of strings as input and returns a Map where each unique string
from the array is a key, and the value is the number of times that string appears in the array.

For example, if the input array is `["apple", "banana", "apple", "orange", "banana", "apple"]`,
 the output Map should be:

```
Map {
  "apple" => 3,
  "banana" => 2,
  "orange" => 1
}
```
*/

function createMap(fruits){
let fruitsMap = new Map();

fruits.forEach((fruit)=>{    
if(fruitsMap.has(fruit)){
    fruitsMap.set(fruit,(fruitsMap.get(fruit)+1));
}else{
    fruitsMap.set(fruit,1);
}
})
return fruitsMap;
}

let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
createMap(fruits).forEach((v,k)=>console.log(k+' => '+v));