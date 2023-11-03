// const map1 = {
//  name :'krunal',
//  age: 32,
//  city: 'Rajkot' 
// };
// const contact1 = {
//  fname: 'krunal',
//  lname: 'bhatt'   
// }
// const contact1 = new Map([['fname','krunal'],['lname','bhatt']])
// // console.log(map1.name);
// for(let [k,v] of contact1.entries()){
//     console.log(k+': '+v);
// }


function squareNumbers(numbers){
   numbers.array.forEach(element => {
        element ^ 2;
   });
   return numbers;
}
const numbers = new Map([['a',1],['b',2]]);
console.log('Initital Numbers :'+numbers);
console.log('Squaring those numbers :'+squareNumbers(numbers));