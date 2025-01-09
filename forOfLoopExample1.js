// let arr1 = ['A','B','C']
// for (const element of arr1) {
//     console.log(element);
// }

// let greeting = "Hello Krunal!"
// for (const greet of greeting) {
//     if(greet == ' ')
//         continue;
//     console.log(greet);
// }

//Maps
let stateCapitals = new Map();
stateCapitals.set('Gujarat','Gandhinagar')
stateCapitals.set('M.P','Indore')
stateCapitals.set('Maharastra','Mumbai')

for (const [k,v] of stateCapitals) {
    console.log(k+" : "+v);
}