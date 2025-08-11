// Suppose you have three asynchronous functions: fetchUser(), fetchPosts(), and fetchComments(). 
// Each returns a Promise that may resolve or reject. Write code using Promise.allSettled() to call all 
// three functions in parallel and log the status and value or reason for each result.
function fetchUser(id) {
    const users = [
        {
            'id': 1,
            'name': 'Ajay'
        }, {
            'id': 2,
            'name': 'Aditya'
        }
    ];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(user => user.id === id);
            if (user) {
                resolve(user);
            } else {
                reject(new Error('User Not Found'));
            }
        }, 2000);
    })
}

function fetchPosts(genre) {
    const posts = [
        {
            'id': 1,
            'genre': 'Romance',
            'message': 'Just wrapped up a productive meeting with the team.'
        },
        {
            'id': 2,
            'genre': 'formal',
            'message': 'Great ideas flowing and solid plans ahead!'
        },
        {
            'id': 3,
            'genre': 'formal',
            'message': 'Excited to share that our latest project milestone has been successfully achieved.'
        }
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = posts.find(post => post.genre === genre);
            if (post) {
                resolve(post);
            } else {
                reject(new Error('No Posts found!'))
            }
        }, 2000);
    })
}

function fetchComments(id) {
    const comments = [
        {
            "id": 1,
            "comment": "Great update! Looking forward to the next steps."
        },
        {
            "id": 2,
            "comment": "Well done team, this is a big achievement!"
        },
        {
            "id": 3,
            "comment": "Thanks for sharing. Very insightful!"
        }
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const comment = comments.find(comment => comment.id === id);
            if (comment) {
                resolve(comment);
            } else {
                reject(new Error('No Comment found!'));
            }
        }, 2000);
    });

};

// Sequencial calling of each async function
// fetchPosts('formal1')
//        .then(result => {
//              console.log(result);
//        })
//        .catch(reason => {
//             console.log(reason);
//        })

// fetchUser(3)
//           .then(response=>{
//                 console.log(response);
//           })
//           .catch(reason => {
//             console.log(reason);
//           })

// fetchComments(4)
//        .then(response => {
//         console.log(response);
//        })
//        .catch(reason => {
//         console.log(reason);
//        });

// Parallelly calling async function
Promise.allSettled([
    fetchUser(1),
    fetchPosts('xyz'),
    fetchComments(1)
]).then(responses => {
    responses.forEach(response => {
        if (response.status == 'fulfilled') {
            console.log(response.status + ' : ',response.value);
        } else {
            console.log(response.status + ' : ',response.reason);
        }
    })
})