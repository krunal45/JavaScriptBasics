/*
Write a program to reverse a number and string without using pre-built methods.

1. 'XY' > [X][Y] > loop : reverse order > [Y][X] > join > 'YX'
*/
let data = 'abc'
console.log(`Reverse of ${data} is: `+reverseData(data));


function reverseData(input){
    let data = String(input)
    let data1 = data.split('')
    let data2 = [];
    for (let index = data1.length - 1; index >= 0; index--) {
       data2.push(data1[index]);   
    }
    return data2.join('')
}