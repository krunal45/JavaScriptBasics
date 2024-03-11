//Problem Statement:
/*
Create a JavaScript function that takes an array of strings representing your shopping list (with potential duplicates) as input.
Use a Set to remove the duplicates from the list.
After processing with the Set, return a new array containing only the unique items you need to buy.
*/

function getUniqueElements(itemList){
   return new Set(itemList);
}

let itemList = ['Apple','Banana','Chickoo','Apple'];
console.log(`Original Item List:`+itemList);
console.log('Unique Elements in list are:'+Array.from(getUniqueElements(itemList)));