const promise1 = new Promise((resolve,reject)=>{
    // Simulating an asynchronous operation
    setTimeout(()=>{
        const randomNumber = Math.ceil(Math.random()*100)
        if(randomNumber%2===0){
            resolve("Promise is resolved")
        }else{
            reject("Promise is rejected")
        }
    },2000)
})

// Handling the promise
promise1.then((result)=>{
    console.log(result)
}).catch((result)=>{
    console.log(result)
});