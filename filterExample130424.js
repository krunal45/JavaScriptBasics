let names = ['Ajay','Bob','Charlie','David','Ena','Anaya'];
// Let's try to filter out names that start with 'A'
let filteredNames;
filteredNames = names.filter((name)=>(name.charAt(0)==='A'));
console.log(filteredNames);

let nums = [1,2,3,4,5];
let oddNumber,evenNumber;
//1. Filter out numbers that are 'odd'.
//2. Filter out numbers that are 'Even'
function evenNumberCheck(num){
   return num % 2 === 0;
}

function oddNumberCheck(num){
    return num % 2 != 0;
}

oddNumber = nums.filter(oddNumberCheck);
console.log('odd:'+oddNumber);
evenNumber = nums.filter(evenNumberCheck);
console.log('even:'+evenNumber);

//---- Filter out employees
let employees = [
    {'name':'Ajay','age':32,'gender':'Male'},
    {'name':'Atishi','age':22,'gender':'feMale'},
    {'name':'Alok','age':21,'gender':'Male'},
    {'name':'Babita','age':33,'gender':'feMale'}
]

let empList1,empList2;
empList1 = employees.filter((employee)=>(employee.age>30));
console.log(empList1);
empList2 = employees.filter((employee)=>(employee.gender === 'Male'));
console.log(empList2);