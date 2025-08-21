// Example 1
// debugger;
// const getPosts = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts?_limit=2');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getPosts();

// Example 2
// debugger;
// const getStatus = async () => {
//     try {
//         const response = await fetch('https://mock.httpstatus.io/400');
//         if(response.status!==200)
//             throw new Error(response.statusText);
//     } catch (error) {
//         console.log(error);
//     }
// };

// getStatus();

// Example 3
debugger;
const getStatus = async () => {
    const response = await fetch('https://mock.httpstatus.io/400');
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    const data = response.text();
    console.log(data);
};

getStatus().catch(error => console.log('Catch Error: '+error));