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