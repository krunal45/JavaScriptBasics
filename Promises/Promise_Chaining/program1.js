function getNameStartingWithA(names, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = names.filter(name => name.startsWith('A'));
            if (result.length > 0) {
                resolve(result);
            } else {
                reject(new Error('No matching names found'))
            }
        }, timeout);
    });
};

const names = ['Ajay','Aditya','Surya'];
getNameStartingWithA(names,3000)
              .then((result) => {
                   console.log('Step 1');
                   console.log(result);
                   const names = ['Bob','Binoy','Chatur'];
                   return getNameStartingWithA(names,4000);
              })
              .then((result)=>{
                console.log('Step 2');
                console.log(result);
              })
              .catch((err) => {
                console.log(err);
              });