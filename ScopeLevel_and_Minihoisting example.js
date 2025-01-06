// Scope Example 1
function one(){
    const greet = 'hey '
    function two(){
        const name = 'Krunal'
        console.log(greet + name);
    }
    two()
    
}
one()

// Scope Example 2
const name = 'KB'
if(name){
    console.log(name);
    const greet = 'Hey '
    if(greet){
        const name1 = 'Alok'
        console.log(greet + name);
    }
    // console.log(name1);
}

//Mini Hoisting Example
console.log(addOne(1));

function addOne(number){
    return number + 1
}
// Way 1
// console.log(addTwo(1));
// const addTwo = function(number){
//     return number + 2
// }

// Way 2

const addTwo = function(number){
    return number + 2
}
console.log(addTwo(1));