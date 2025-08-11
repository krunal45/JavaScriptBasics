// This program is meant to clear concepts based on promise.all();

// 1. While all promises are resolved
function getData1(timeout) {
   return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('data 1');
          }, timeout);
   });
};

function getData2(timeout) {
  return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('data 2');
          }, timeout);
   });
};

function getData3(timeout) {
  return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('data 3');
          }, timeout);
   });
};

Promise.all([getData1(100),getData2(500),getData3(300)])
       .then(message=>{
        console.log(message);
       })
       .catch(err=>{
        console.log(err);
       });

// 2. While 1 promise is resolved & other is rejected.
function verifyIfNameStartsWithB(name,timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const flag = name.charAt(0) == 'B';
            if (flag) {
                resolve(name+' starts with B!');
            } else {
                reject(name+' do not start with B!');
            }
        }, timeout);
    });
};


function verifyIfNameStartsWithC(name,timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const flag = name.charAt(0) == 'C';
            if (flag) {
                resolve(name+' starts with C!');
            } else {
                reject(name+' do not start with C!');
            }
            
        }, timeout);
    });
};

// Add a debugger statement inside your promise callbacks to set a breakpoint
Promise.all([
    verifyIfNameStartsWithB('Ajay', 1000),
    verifyIfNameStartsWithC('Chatur', 1500)
])
    .then(response => {
        debugger; // <-- Execution will pause here if you run with a debugger
        console.log(response);
    })
    .catch(err => {
        debugger; // <-- Execution will pause here if you run with a debugger
        console.log(err);
    });