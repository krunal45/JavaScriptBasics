//Object Deserialization
let student = {
    name: "Krunal",
    age: 18,
    gender: "male"
}

let {name} = student
console.log('name > ',name);

//using alias to use variable name as 'n' instead of 'name'
let {name:n} = student
console.log('name > ',n);