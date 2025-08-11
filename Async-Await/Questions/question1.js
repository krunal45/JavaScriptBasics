// Write an asynchronous function using async and await that waits for a Promise to resolve after 2 seconds
// and then logs "Promise resolved!" to the console. Show how you would call this function.

function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve('Promise resolved!');
        }, 2000);
    })
}

const message = async () =>  await f1();

message()
        .then(response => {
            console.log(response); 
        })