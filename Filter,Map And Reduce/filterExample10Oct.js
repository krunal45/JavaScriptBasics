/*
Sure! Let’s explore the concept of filtering arrays in JavaScript. Here’s a question for you:

### Question:

Imagine you have an array of objects representing students, and each object contains the student's name and their score in a subject. The array looks like this:

```javascript
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 72 },
    { name: 'Charlie', score: 90 },
    { name: 'David', score: 65 },
    { name: 'Eva', score: 95 }
];
```

**Your task is to create a new array that includes only the students who scored 80 or higher.**

### Detailed Explanation:

1. **Understanding the Data Structure**: The data you are working with is an array of objects. Each object contains two properties: `name` (a string) and `score` (a number). You need to evaluate the `score` property to determine which students meet the criteria.

2. **Using the `filter` Method**: The `filter` method in JavaScript creates a new array with all elements that pass the test implemented by the provided function. This means you'll be writing a function that checks if a student's score is 80 or more.

3. **Expected Output**: After filtering, your new array should only contain the objects of students who meet the score condition. For example, if you were to log the output, it might look something like this:

```javascript
[
    { name: 'Alice', score: 85 },
    { name: 'Charlie', score: 90 },
    { name: 'Eva', score: 95 }
]
```

### Key Points to Consider:

- You’ll need to define a function that checks each student’s score.
- Make sure you understand how the `filter` method works, including what it returns and how to use it effectively.
- Remember that the original array should remain unchanged; you are creating a new array.

### Next Steps:

Try to implement the filtering logic based on the criteria provided. If you have questions or need clarification about any part of the task, feel free to ask!
*/

function getTopStudents(studentMarks){
return studentMarks.filter(student=>student.score >= 80);
}

const studentMarks = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 72 },
    { name: 'Charlie', score: 90 },
    { name: 'David', score: 65 },
    { name: 'Eva', score: 95 }
];

let topStudents = getTopStudents(studentMarks); 
for(let student of topStudents)
    console.log(student.name+': '+student.score);