// Example 1
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({name:'Ajay',age:12});
//     }, 1000);
// });

// // Resolving Promise > Way 1 using then()
// // promise.then(data => {console.log(data)});

// // Resolving Promise > Way 2 using async-await()
// async function getData() {
//     const response = await promise;
//     console.log(response);
// };

// getData();

// Example 2 > Using Fetch API
// Way 1 using then() | catch()
// function getComments() {
//     fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
//        .then(response => response.json())
//        .then(data => console.log(data));
// }

// Way 2 using async-await()
debugger;
async function getComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    // console.log(response.status);
    // console.log(response.headers);
    // console.log(response.statusText);
    const data = await response.json();
    console.log(data);
};

getComments();