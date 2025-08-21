function createPost({ title, body }) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': '123'
        },
        body: JSON.stringify({
            title,
            body
        }
        )
    }).then(response => response.json())
      .then(data => console.log(data));
};

createPost({title:'My Post',body:'This is post 1'});