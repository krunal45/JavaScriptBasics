// Write a function that takes an array of numbers and a timeout value, and returns a Promise. 
// The Promise should resolve with an array of numbers that are even, after the specified timeout. 
// Then, chain another Promise that filters out numbers greater than 10 from the result, and log both steps. 
// Handle any errors if no even numbers are found.

function evenNumberCheck(numbers,timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const evenNumbers = numbers.filter(number=> number%2==0 );
            if (evenNumbers.length > 0) {
                resolve(evenNumbers);
            }else{
                reject('No Even Numbers found!');
            }
        }, timeout);
    });
};

const numbers = [1,20,30,4];
const evenNumbers = numbers.filter(number => number % 2 == 0 );
evenNumberCheck(numbers,2000)
            .then(response=>{
                console.log(response);
                return new Promise((resolve, reject) => {
                    const numbersGreaterThan10 = response.filter(number=> number > 10 );
                    if (numbersGreaterThan10.length > 0) {
                        resolve(numbersGreaterThan10);
                    } else {
                        reject('No numbers greater than 10 found!');
                    }
                })
            })
            .then(response => {
                console.log(response);
            })
            .catch(reason => {
                console.log(reason);
            })