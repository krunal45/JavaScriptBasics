let students = ['John','Jane','Alice','Bob','Charlie','Emily','David','Sarah','Michael','Jessica']
let studentsNameStartingWithJLetter = []

//Searching for student Names starting with letter 'J'
for (let index = 0; index < students.length; index++) {
    if(students[index].charAt(0)=='J')
        studentsNameStartingWithJLetter.push(students[index])
}

//Printing student Names starting with letter 'J'
for (let index = 0; index < studentsNameStartingWithJLetter.length; index++) {
   console.log(studentsNameStartingWithJLetter[index]);
}

//Printing the table of numbers 1 to 5
for (let number = 1; number < 6; number++) {
    for (let j = 1; j < 11; j++) {
        console.log(`${number} * ${j} = `,number*j);
    }
}

//using break
for (let index = 0; index < 4; index++) {
    if(index == 3)
        break;
    console.log(index);    
}

//using continue
for (let index = 0; index < 6; index++) {
    if(index == 3)
        continue;
    console.log(index);    
}