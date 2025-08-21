fetch('https://reqres.in/api/users/2')
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(error => console.log(error));