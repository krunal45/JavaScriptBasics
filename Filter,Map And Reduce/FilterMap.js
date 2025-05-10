// let nums = [2,3,4,5,6];
// //Printing all values.
// for(let n of nums){
//     console.log(n);
// }
// let result = nums.filter(n =>n%2!==0).map(n =>n * 2).reduce((a,b)=>a*b);
// console.log(result);

let fruits = ['Apple','Banana','Chickoo','Watermelon','Cherry'];
console.log('--before Filtering--');
for(let fruit of fruits){
    console.log(fruit);
}
let filteredFruits = fruits.filter(c => c.startsWith('C'));
console.log('--after Filtering--');
for(let fruit of filteredFruits){
    console.log(fruit);
} 