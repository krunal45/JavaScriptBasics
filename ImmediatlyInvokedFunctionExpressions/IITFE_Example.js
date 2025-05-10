//immediately invoked function expressions
//Way 1
let name1 = 'Krunal';
(function printName(){
    let name2 = 'Krunal1'
    console.log(`Hey ${name2}`);
})();

console.log(`Hey ${name1}`);

//Way 2
(
    name3 => console.log(`My name is ${name3}`)
)('Krunal'); 