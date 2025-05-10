//1. Verify if names starts with letter 'A'
const nameStartsWithLetterA = (currentValue) => currentValue.charAt(0) == 'A'

let names = ['Ajay','Abhay','Adi','Bob']
console.log(names.every(nameStartsWithLetterA))

//2. Verify if age of students is greaterThan 18
const isAgeGreaterThan18 = (currentValue) => currentValue > 18
let ageOfStudents = [19,20,21,18]
console.log(ageOfStudents.every(isAgeGreaterThan18));