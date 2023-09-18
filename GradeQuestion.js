function getStudentGrade(marks){
if(marks>=90 && marks<=100)
    return 'A';
else if(marks>=80 && marks<=89)
    return 'B';
else if(marks>=70 && marks<=79)
    return 'C';
else if(marks>=60 && marks<=69)
    return 'D';
else if(marks>=0 && marks<=59)
    return 'F';
else
    console.log('Please Enter marks between 0 - 100');                
}    
let marks = -1;
console.log('With Marks :'+marks+' grade is :'+getStudentGrade(marks));