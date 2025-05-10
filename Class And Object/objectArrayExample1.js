/*
Sure! Here’s an intermediate-level JavaScript question for you:

---

**Question:**

You have a list of objects representing users with the following structure:

```javascript
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'David', age: 40 }
];
```

Write a JavaScript function called `getUserDetails` that takes an `id` as a parameter and returns a promise that
resolves with the user's details if the user exists or rejects with an error message if the user does not exist.
Use the `Promise` constructor to create the promise.

---

Feel free to let me know if you need any hints or have any questions!
*/
const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'David', age: 40 }
  ];

function getUserDetails(id){
    return new Promise((resolve,reject) => {
    // Find the user with the given id
    const user = users.find(user => user.id === id);

    // If user is found, resolve the promise with the user details
    if(user)
        resolve(user);
    // If user is not found, reject the promise with an error message    
    else
        reject(`User with id = ${id} not found.`);    
}
    );
}

getUserDetails(5).
  then(user=>console.log(user))
  .catch(error=>console.log(error));