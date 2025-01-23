let student = {
  "firstName": "John",
  "lastName": "Doe",
  "studentId": "12345",
  "major": "Computer Science",
  "gpa": 3.8 
}

let {firstName: name} = student
console.log(`FirstName: ${name}`);