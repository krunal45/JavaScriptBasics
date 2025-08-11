// In this program we will try understand functionality of 'Promise.any()'
// In this case JS will wait for either of promises to be resolved before throwing error
// If none of the promises are resolved then JS sends array of rejection errors!

function function1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise Resolved! > 1');
        }, 100);
    })
};

function function2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise Resolved! > 2');
        }, 200);
    })
};

function function3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Promise Rejected!');
        }, 30);
    })
};

Promise.any([
    function1(),
    function2(),
    function3()
]).then(response => {
    console.log(response);
}).catch(reason => {
    console.log(reason);
})