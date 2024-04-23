/*
Here's a beginner-level coding question on the set concept in JavaScript:

**Challenge:**

Imagine you have a list of unique fruits from your shopping basket. However, you accidentally entered some duplicates.    
Write a JavaScript function that takes an array of fruit strings (e.g., ["apple", "banana", "orange", "apple"])
and returns a new array containing only the **unique** fruits, removing any duplicates.

**Tips:**

* Remember that sets are collections of **unique** values.
* Explore how JavaScript's built-in `Set` object can be used to achieve this task.
* Consider how to convert the resulting `Set` back into an array if needed.

I'll wait for you to give this a try. If you get stuck or need some guidance, feel free to ask!
*/

function getUniqueElements(fruits){
  console.log('--before-->'+fruits);  
  let uniqueFruits = new Set();
  fruits.forEach((e)=>(uniqueFruits.add(e)));
  fruits = uniqueFruits;
  return fruits;
  }

let allFruits = ['apple','banana','chickoo','apple'];
let fruits1 = [];
fruits1 = getUniqueElements(allFruits);
fruits1.forEach((fruit)=>console.log(fruit));