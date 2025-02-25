let fullName, age, studentId,gender,enrollmentStatus;
class Student{
    
    constructor(fullName, age, studentId,gender,enrollmentStatus){
        this.fullName = fullName;
        this.age = age;
        this.studentId = studentId;
        this.gender = gender;
        this.enrollmentStatus = enrollmentStatus;
    }
}

let Joy = new Student('Joy Bhattcharya',12,001,'Male','Active');
let Ben = new Student('Ben Bhattcharya',12,002,'Male','Active');
console.log(Joy);
console.log(Ben);