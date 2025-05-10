/*
Sure! Here’s another question on the topic of sets in JavaScript:

**Question:**

Write a function called `symmetricDifference` that takes two arrays, `array1` and `array2`, 
and returns a new array containing the elements that are in either of the arrays but not in both.
In other words, it should return the symmetric difference of the two sets.

For example:

```javascript
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const result = symmetricDifference(array1, array2);
console.log(result); // Output should be [1, 2, 5, 6]
```

**Tips:**
- Use `Set` to help with identifying unique elements and perform lookups.
- Be careful to include elements that are unique to each array.

Give it a go, and let me know if you need any hints!
*/
function symmetricDifference(array1,array2){
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    const differenceArray = new Set();
    for(let element of set2)
        if(!(set1.has(element)))
            differenceArray.add(element)
    
    for(let element of set1)
        if(!(set2.has(element)))
            differenceArray.add(element)        

    return Array.from(differenceArray);        
}

let array1 = [1,2,4,5];
let array2 = [2,3,4];
const array3 = symmetricDifference(array1,array2);
array3.forEach(x=>console.log(x));