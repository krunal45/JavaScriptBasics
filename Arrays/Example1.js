let states = [];
// 1. Adding elements in the array.
let arraySize = states.push('Gujarat','Haryana','M.Pradesh','U.Pradesh');
console.log(states);
console.log('Size > '+arraySize);

// 2. Removing last element from the array
let lastState = states.pop();
console.log(states);
console.log(lastState);

// 3. Remove first element from the array
let firstState = states.shift();
console.log(states);
console.log(firstState);

// 4. Adding new elements in the array using the unshift function
let newArraySize = states.unshift('Assam','Bihar');
console.log(states);
console.log('Size > '+newArraySize);

// 5. Accessing elements using index
console.log('State at index 1 > '+states[1]);

// 6. Using splice function
let deletedStates = states.splice(2,0,'Jharkhand','Odisha');
console.log(states);
console.log('Deleted State > '+deletedStates);

deletedStates = states.splice(1,1);
console.log(states);
console.log('Deleted State > '+deletedStates);

let nums = [1,3,5,7]
console.log('Before adding new number > ',nums);
nums.splice(1,0,2)
console.log('After adding new number > ',nums);

// 7. Using slice function
console.log('Before slice function');
console.log(states);
console.log('After slice function');
console.log(states.slice(0,3));
// numbers = [1,2,3,4,5,6,7] > For example: we want numbers from 4 to 7 then we can achieve this using slice function
let numbers = [1,2,3,4,5,6,7];
console.log('Actual Numbers > ',numbers);
let slicedNumbers = numbers.slice(3)
console.log('Sliced Numbers > ',slicedNumbers);
// For example we want last 2 numbers
let lastTwoNumbers = numbers.slice(-2)
console.log('Last Two Numbers > ',lastTwoNumbers);

// 8. Using concat function
let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
let weekendDays = ['Fri', 'Sat'];
let combinedDays = weekDays.concat(weekendDays);
console.log('Combined Days > ',combinedDays);

// 9. Using indexOf function
let names = ['Ajay','Adi','Bala','Ajay'];
let firstIndexOfAjay = names.indexOf('Ajay');
console.log('firstIndexOfAjay > ',firstIndexOfAjay);
let secondIndexOfAjay = names.indexOf('Ajay',names.indexOf('Ajay')+1);
console.log('secondIndexOfAjay > ',secondIndexOfAjay);

// 10. Using lastIndexOf function
console.log('lastIndexOfAjay > ',names.lastIndexOf('Ajay'));