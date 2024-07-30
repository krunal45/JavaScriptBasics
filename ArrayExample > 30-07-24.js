/*
Sure! Here’s a question for you:

Given an array of objects where each object represents a person with `name` and `age` properties, write a JavaScript function that
takes this array as input and returns a new array containing only the names of the people who are 18 years old or older, sorted alphabetically.

For example, given the input:

```javascript
const people = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
    { name: 'Diana', age: 16 }
];
```

The function should return:

```javascript
['Alice', 'Charlie']
```

How would you approach this problem?
*/
function returnPeople(arr1){
let filtered = arr1.filter(obj => obj.age>=18);
let names = filtered.map(obj => obj.name);    
return names.sort();
}

const people = [
    { name: 'Charlie', age: 30 },
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 17 },
    { name: 'Diana', age: 16 }
];
let originalNames = people.map(obj => obj.name);
let names = returnPeople(people);
console.log(`${originalNames} with age > 18 are: ${names}`);