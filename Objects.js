
let input = 'name'
let student = {
    name:'Krunal',
    age:32,
    'work exp':4
}
console.log(student);
console.log(typeof student)

// Accessing specific property of an object.
// Way 1
console.log(student.name);
console.log(student.age);
// Way 2
console.log(student['name']);
console.log(student['age']);
console.log(student['work exp'])
console.log(student[input])