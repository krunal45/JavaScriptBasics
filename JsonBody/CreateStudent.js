let name,age,student_id,enrollment_status,gender; //student attributes

class Student{
    constructor(name,age,student_id,enrollment_status,gender){
        this.name = name;
        this.age = age;
        this.student_id = student_id;
        this.enrollment_status = enrollment_status;
        this.gender = gender;
    } 
}

let Gaurav = new Student('Gaurav',32,7,'Active','Male');
let Krunal = new Student('Krunal',30,8,'Active','Male');
let Khyati = new Student('Khyati',28,9,'Active','Female');
let Students = [Gaurav,Krunal,Khyati]
// console.log(Students);
console.log('Name :'+Students[0].name);