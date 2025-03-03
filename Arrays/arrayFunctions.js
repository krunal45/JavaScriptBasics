// Every Function
let names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Adam",
    "Alice"
  ];
  let flag = names.every((name)=>name.charAt(0)==='A');//Verifying if all name starts with letter 'A'
  console.log('all name starts with letter A ?',flag);

  let wordLengthGreaterThan2 = names.every((name)=>name.length > 2);
  console.log('Name Length is GreaterThan2',wordLengthGreaterThan2);

// Some Function
let nameStartsWithA = names.some(name=>name.charAt(0)==='A')
console.log('Name starts with character A for atleast one ?',nameStartsWithA);

let nameStartsWithZ = names.some(name=>name.charAt(0)==='Z')
console.log('Name starts with character Z for atleast one ?',nameStartsWithZ);

// find Function
let nameStartingWithA = names.find(name => name.charAt(0)==='A')
console.log('Name Starting With Letter A',nameStartingWithA);

let nameStartingWithE = names.find(name => name.charAt(0)==='E')
console.log('Name Starting With Letter E',nameStartingWithE);

let nameStartingWithZ = names.find(name => name.charAt(0)==='Z')
console.log('Name Starting With Letter Z',nameStartingWithZ);

// indexOf() Function
let indexOfAlice = names.indexOf('Alice')
console.log('indexOfAlice',indexOfAlice);

let indexOfZenny = names.indexOf('Zenny')
console.log('indexOfZenny',indexOfZenny);

// lastIndexOf() Function
let lastIndexOfAlice = names.lastIndexOf('Alice')
console.log('lastIndexOfAlice',lastIndexOfAlice);

// reverse()
let reversedNames = names.reverse()
console.log(reversedNames);

// sort()
let fruits = ["banana", "apple", "orange", "grape"]
console.log('Before Sort > ',fruits);
fruits = fruits.sort();
console.log('After Sort > ',fruits);

let numbers = [2,3,1,0];
console.log('Before Sort > ',numbers);
numbers = numbers.sort();
console.log('After Sort > ',numbers);