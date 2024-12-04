// function reverseString(name){
//     let list = []   
//     for(let i=name.length-1;i>=0;i--){
//         list.push(name.charAt(i))
//     }
//     return list.join('')    
// }

function reverseNumber(number){
    let digit 
    let result = 0
        while (number!==0) {
        digit = number % 10
        result = result  * 10 + digit
        number = Int8Array(number / 10)
        }
    return result
}

const number = 123
console.log(`Reversed number of ${number} is > `+reverseNumber(number))
// let name1 = 'Krunal'
// console.log(`Reversed string of ${name1} is:`+reverseString(name1))