const userEmail = 'k@gmail.com'
if(userEmail){
    console.log('Email exists!');
}else{
    console.log('Email do not exist');
}

//falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values > values apart from above are truthy values.

// Verifying if object is empty
let user = {}
if(Object.keys(user).length === 0){
    console.log('Object is Empty!');
}

//Null coalescence operator
let val1;
val1 = 5 ?? 10;
console.log(val1);

val1 = null ?? 5;
console.log(val1);

//Ternary Operator:
const score = 79;
score > 80 ? console.log('Score is greater than 80'): console.log('Score is less than 80');