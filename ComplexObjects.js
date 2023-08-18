let employee1 = {
    name:'Krunal',
    department:'QA',
    laptop1 : {
        brand:'MAC',
        cpu1:'intel',
        ram:16
    }
}
// console.log(employee);
// console.log(employee.laptop);
// console.log(employee.laptop.brand);
// console.log(employee.laptop.cpu.length)

// While the property we are trying to fetch do not exist.
// console.log(employee?.laptop?.cpu?.length);

// Deleting specific property from object.
console.log(employee1); 
delete employee1['name'];
console.log(employee1); 
delete employee1['laptop1'];
console.log(employee1);