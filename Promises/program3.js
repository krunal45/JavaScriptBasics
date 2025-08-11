// In this program we will try to understand 'promise.allSettled();
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data Resolved!')
        }, 2000);
    });
};

function getError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error: Data Not Resolved!')
        }, 2000);
    });
};

Promise.allSettled([
    getData(),
    getError()
]).then(results => {
    results.forEach(result => {
        if (result.status == 'fulfilled') {
              console.log(result.value);
        } else {
              console.error(result.reason);
        }
    })
})