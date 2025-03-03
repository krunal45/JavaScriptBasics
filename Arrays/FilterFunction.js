// Filtering Odd Numbers
let numbers = [2,3,4,5,6];
let oddNumbers = numbers.filter(num=>num%2!==0);
console.log(oddNumbers);

// Filtering Student
let students = [
    {
      "name": "Alice Smith",
      "age": 16,
      "gender": "female"
    },
    {
      "name": "Bob Johnson",
      "age": 17,
      "gender": "male"
    },
    {
      "name": "Charlie Williams",
      "age": 15,
      "gender": "male"
    },
      {
      "name": "Diana Brown",
      "age": 16,
      "gender": "female"
    },
      {
      "name": "Eve Davis",
      "age": 18,
      "gender": "female"
    }
  ]

let femaleStudents = students.filter((student) => student.gender === 'female');
console.log('Female Students > ',femaleStudents);

let maleStudents = students.filter(student => student.gender === 'male')
console.log('male Students > ',maleStudents);