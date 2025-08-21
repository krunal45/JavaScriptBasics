fetch('https://randomuser.me/api')
     .then(response => response.json())
     .then(data => displayLocation(data.results[0].location))
     .catch(error => console.log(error));


function displayLocation(info) {
    console.log(info);
}     