let num1 = true
let num2 = false
let res = num1 + num2
console.log(res)
num1 +=1
console.log(num1)
num1 *=20
console.log(num1)
num1 %=4
console.log(num1)

// Post and pre-increment operators
let n1 = 1
let r1 = n1++ // Post increment operator will assign value to r1 first and then perform increment operation.
console.log(r1,n1)

let n2 = 2
let r2 = ++n2 // Pre increment operator will perform increment operation first and then assign value to r2. 
console.log(r2,n2)

// Finding power of a number

let n3 = 5
n3 = n3 ** 2
n3 = Math.pow(5,4)
console.log(n3)