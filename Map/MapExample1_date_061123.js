function getStudentAge(students, studentName) {
    let studentsMap = new Map();
    for (let student of students) {
      studentsMap.set(student.name, student.age);
    }
    return studentsMap.get(studentName);
  }
  
  let students = [{
    name: 'Krunal',
    age: 32,
    grade: 'A1'
  }, {
    name: 'Jay',
    age: 30,
    grade: 'A1'
  }, {
    name: 'Joy',
    age: 28,
    grade: 'A2'
  }];
  
  let studentName = 'Jay';
  let studentAge = getStudentAge(students, studentName);
  console.log('Age of ' + studentName + ' is: ' + studentAge);
  