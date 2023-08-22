//Variables
let userName = 'Krunal';
let userAge = 32;
const birthYear = 1991;
console.log('UserName :'+userName);
console.log('UserAge :'+userAge);
console.log('Birthyear :'+birthYear);

//Functions
function greetUser(name)
{
    return `Hello, [${name}]`;
}
let greetinMSG = greetUser(userName);
console.log(greetinMSG);

//Array
let fruits = ['Apple','Banana','Chickoo']
console.log('--initially--');
for(let key in fruits){
    console.log(fruits[key]);
}
fruits.push('Dragon');
console.log('After adding new Fruit');
for(let key in fruits){
    console.log(fruits[key]);
}
fruits.shift();
console.log('After removing first fruit.');
for(let key in fruits){
    console.log(fruits[key]);
}

//Conditional Statements
function evenOrOdd(number){
    if(number % 2 === 0)
        return "Even";
    else
        return "Odd";    
}
console.log(evenOrOdd(17.5));

//Loops
let numbersArray = [];
for(let i=1;i<6;i++){
    numbersArray.push(i);
}

for(let key in numbersArray){
    console.log(numbersArray[key]);
}

for(let number of numbersArray){
    console.log(number);
}

for(i=4;i>=0;i--){
    console.log(numbersArray[i]);
}

function table(number){
for(i=1;i<11;i++){
   console.log(number+" * "+i+" = "+(number*i) );
}}

table(41)