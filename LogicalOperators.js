// And Operator : Both the conditions should be true to result true value
// 1.Return True value condition
let num1=2,num2=3,num3=5
let result 
// result= num1 < num2 && num1<num3
// console.log(result) 

// let name1 = 'Krunal',name2 = 'Krunal',name3 = 'Krunal'
// result = (name1 == name2) && (name1 == name3)
// console.log(result)

// 2.Return False value condition
// result = num1>num2 && num1<num3
// console.log(result)

// result = (name1 > name2) && (name1 >=name3)
// console.log(result)

// Or Operator : Either of the conditions should be true to result true value
// console.log('--Or Operator-- // True Condition')
// result = num1 < num2 || num1>num3
// console.log(result) 

// result = (name1 == name2) || (name1 > name3)
// console.log(result)

// console.log('--Or Operator-- // False Condition')
// num1 = 10,num2 = 20, num3=25
// result = num1 == num2 || num2 > num3
// console.log(result)

name1='Apple',name2='banana'
result = (name1 == name2) || (name1 > name2)
console.log(result)

// Not operator : Will reverse the actual boolean result.
console.log('Before applying not operator')
console.log(result)
console.log('After applying not operator')
console.log(!result)