function printAge(age,printFn) {
    printFn(age)
}
let age = 2

let print = function (age) {
    console.log('Age > ',age);
}
printAge(age,print)