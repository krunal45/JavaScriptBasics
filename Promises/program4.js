// In this program we will learn functionality of Promise.race();

function function1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise Resolved!')
        }, 100);
    })
};

function function2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Promise Rejected!')
        }, 500);
    })
};

Promise.race([
    function1(),
    function2()
]).then(response => {
    console.log(response);
}).catch(reason => {
    console.log(reason);
})