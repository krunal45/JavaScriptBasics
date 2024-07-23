/*
I'd be glad to act as your JavaScript tutor!

**Here's a beginner-level coding question based on the map concept:**

Imagine you have a list of student names and their corresponding grades. 
You want to create a map that stores this information, where the student name
is the key and the grade is the value. 

**Challenge:** Write some JavaScript code to achieve this. 

**Tips:**

* Remember, maps are declared using the `new Map()` constructor.
* You can add key-value pairs to a map using the `set()` method. For example,
 `myMap.set("Alice", 90);` sets Alice's grade to 90.
* Once you have the map created, try accessing a student's grade using the `get()` method.
  For example, `myMap.get("Alice");` would return 90 in this case.
*/
let studentGrades = new Map();
studentGrades.set("Alice",90);
studentGrades.set("Ajay",80);
studentGrades.set("Bob",70);
studentGrades.set("Carrie",85);
console.log('Alice: '+studentGrades.get('Alice'));
console.log('Ajay: '+studentGrades.get('Ajay'));
console.log('Bob: '+studentGrades.get('Bob'));
console.log('Carrie: '+studentGrades.get('Carrie'));