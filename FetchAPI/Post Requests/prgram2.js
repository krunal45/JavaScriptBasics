
const response = await fetch('https://jsonplaceholder.typicode.com/todos',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            title:'krunal todo List',
            completed: false
        })
    });

// Print Response
const data = await response.json();
console.log(data);

// Print statusCode
const statusCode = await response.status;
console.log(statusCode);

// Print headers
const headers = await response.headers;
console.log(headers);