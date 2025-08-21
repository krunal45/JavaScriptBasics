// Example 1
debugger;
function doubleNumber(number) {
    if (isNaN(number)) {
        throw new Error('Not a number!')
    }
    return (number * 2);
};

try {
   const result = doubleNumber(2); 
   console.log(result);
} catch (error) {
    console.log(error);
} 