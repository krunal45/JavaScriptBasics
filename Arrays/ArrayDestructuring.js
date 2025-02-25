let names = ['alpha','beta','gamma'];
let [a,b,c] = names;
console.log(c);

// Swapping variable values
// let d = 5;
// let e = 6;
// console.log('--Before swap--');
// console.log('d : '+d);
// console.log('e : '+e);
// [d,e] = [e,d];
// console.log('--After swap--');
// console.log('d : '+d);
// console.log('e : '+e);

// Converting String into Array.
let sentence = 'My Name is Krunal Bhatt & I love programming';
let ref1  = [a1,b1,c1,d1,e1,f, ...l] = sentence.split(' ');
for(let a of ref1){
   console.log(a);
}

let g1 = 'horse';