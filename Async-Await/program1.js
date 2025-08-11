// In this program will try to understand Async-Await concept!
// Scenario 1: Async function without 'await'
// async function f1() {
//     console.log("Into Async function: 1");
//     return 1;
// };

// f1()
//     .then(response => {
//         console.log(response);
//     });

// Scenario 2: Async function without 'await' but with Error!
// const f2 = async () => {
//     console.log("Into Async function: 2");
//     return new Error('Something went wrong!');
// };

// f2()
//     .then(response => {
//         console.log(response);
//     })
//     .catch(reason => {
//         console.log(reason);
//     })

// Scenario 3.1: Async function with 'await'

// function isNameStartingWithA(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const flag = name.charAt(0) === 'A';
//             if (flag) {
//                 resolve('Name starts with character A');
//             } else {
//                 reject(new Error('Name does not start with character A'));
//             }
//         }, 2000);
//     });
// }

// const nameValue = 'Bob';

// (async () => {
//     try {
//         const result = await isNameStartingWithA(nameValue);
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// })();

// Scenario 3.2: Async function with 'await'

function isNumberDivisibleBy5(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const flag = (number %5 === 0);
            if (flag) {
                resolve('PASS: Number is divisible by 5.')
            } else {
                reject(new Error('FAIL: Number is not divisible by 5'));
            }
        }, 2000);
    });
};

const divisibleBy5 = async (number) => await isNumberDivisibleBy5(number);

const number = 10;
divisibleBy5(number)
       .then(response => console.log(response))
       .catch(error => console.log(error));