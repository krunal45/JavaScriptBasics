 function passedStudents(studentMarks,passingMark){
  let studentsMap = new Map();  
  studentMarks.forEach((student)=>{if(student.marks>=passingMark){studentsMap.set(student.name,student.marks)}});
  return studentsMap;
}

let studentMarks = [{name:'Akash',marks:40},{name:'Bob',marks:25},{name:'Carry',marks:30},{name:'Ella',marks:45}];
passedStudents(studentMarks,35);
let map1 = new Map();
map1 = passedStudents(studentMarks,35);
console.log(map1);


// ----Using Filter Method

// function passedStudents(studentMarks, passingMark) {
//     // Use the filter method to filter out passing students
//     let passingStudents = studentMarks.filter(student => student.marks >= passingMark);

//     // Create a new Map object to store passing students' names and marks
//     let studentsMap = new Map(passingStudents.map(student => [student.name, student.marks]));

//     return studentsMap;
// }

// // Sample data
// let studentMarks = [
//     { name: 'Akash', marks: 40 },
//     { name: 'Bob', marks: 25 },
//     { name: 'Carry', marks: 30 },
//     { name: 'Ella', marks: 45 }
// ];

// // Call the passedStudents function with sample data and passing mark
// let map1 = passedStudents(studentMarks, 35);

// // Output the resulting Map object
// console.log(map1);