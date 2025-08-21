// const strLit = 'Hi';
// const strObj = new String('Hello');

// console.log(strLit,typeof strLit);
// console.log(strObj,typeof strObj);

// // Boxing > Converts 'literal' type to 'Object'
// console.log(strLit.toUpperCase());

// // Unboxing > Converts 'Object' to 'literal'
// console.log(strObj.valueOf(),typeof strObj.valueOf());

const funcLit = function (num) {
    return num * num;
};
console.log(funcLit(),typeof funcLit());
console.log(funcLit(3));