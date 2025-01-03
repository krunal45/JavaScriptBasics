function greet(name='Sam'){
    console.log(`Hey ${name}`);
}

greet('Krunal')

function sumCalculate(...price){
    let sum = 0
    for(let i=0;i<price.length;i++){
         sum = sum + price[i]
    }
    return sum
}

let sum = sumCalculate(10,20)
console.log('sum > ',sum)

let student = {
    name: 'Krunal',
    age: 15
}

function printStudent(student){
  console.log(`Student Name is ${student.name} & age is ${student.age}`);
}

printStudent(student)