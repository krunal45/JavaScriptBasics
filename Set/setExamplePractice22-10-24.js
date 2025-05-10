/*
Sure! Here’s an intermediate-level question about sets in JavaScript:

**Question:** 

You are given two arrays of numbers, `array1` and `array2`. Write a function called `findCommonElements` that
returns a new array containing the elements that are common to both arrays. Use sets to achieve this. 

For example:

```javascript
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const result = findCommonElements(array1, array2); 
console.log(result); // Output should be [4, 5]
```

**Tips:**
- Consider using the `Set` object in JavaScript for efficient lookups.
- Ensure the result does not contain duplicates.

Give it a try, and let me know if you need any hints!
*/
 function findCommonElements(array1,array2){
    const set1 = new Set(array1);
    const commonArray = new Set();
    
    for(let element of array2)
        if(set1.has(element))
            commonArray.add(element);
    return Array.from(commonArray);        
 }

 let array1 = [1,2,3];
 let array2 = [2,3,4];
 findCommonElements(array1,array2).forEach((x)=>console.log(x));