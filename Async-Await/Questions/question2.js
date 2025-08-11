// Suppose you have two asynchronous functions, fetchUserData() and fetchUserPosts(), both returning Promises.
// Write an async function that fetches user data and then, using a property from the user data (like user.id), 
// fetches the user's posts. Handle any errors using try...catch and log appropriate messages for both success and failure cases.
function fetchUserData(id) {
    const users = [
        {
            'id': 1,
            'name': 'Ajay'
        },
        {
            'id': 2,
            'name': 'Aditya'
        }
    ]
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = users.find(user => user.id === id);
            if (user != undefined) {
                resolve(user);
            } else {
                reject('Fail: User not found!');
            }
        }, 2000);
    })
}

function fetchUserPosts(id) {
    const posts = [
        {
            'id': 1,
            'post': 'I am User 1'
        },
        {
            'id': 2,
            'post': 'I am User 2'
        }
    ]
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let post = posts.find(post => post.id === id);
            if (post.id != undefined) {
                resolve(post.post);
            } else {
                reject('Fail: User Post not found!');
            }
        }, 2000);
    })
}

// // 1. Fetch User Data
// const userDetails = async (userId) => await fetchUserData(userId);

// // 2. Fetch User Posts
// const userId = userDetails(1).then(response => response.id).catch(error => console.log(error));
// const userPosts = async (userId) => await fetchUserPosts(userId);
// userPosts(1).then(response => console.log(response)).catch(error => console.log(error));


async function fetchUserDataAndPosts(userId) {
    try {
        const user = await fetchUserData(userId);
        console.log(user);
        const post = await fetchUserPosts(user.id);
        console.log(post);
    } catch (error) {
        console.log('FAIL: No Relevant posts found!');
    }
}

// calling async function
fetchUserDataAndPosts(3);