// function factorial(num){
//   if(num==0)
//      return 1;
//   else{
//     return (num * factorial(num -1));
//   }  
// }
// let res = factorial(4);
// console.log(res);

// // w.a.p to add first 10 numbers.
let sum1 = 0;
function add(num){
   if(num > 0)
   {
   sum1 = sum1 + num
   num --;
   add(num);
   }
   
   return sum1;
}

// function add1(num){
//     let sum=0;
//     for(i=num;i>=0;i--){
//        sum = sum + i;
//     }
//     return sum;
// }
let res1 = add(100);
console.log(res1);