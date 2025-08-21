// Success Response: 200
// fetch('https://mock.httpstatus.io/200')
//     .then(response => response.text())
//     .then((data) => console.log(data))

// Control won't go to 'catch' block for non success responses!. It will only go to catch block if there is some error!
// fetch('https://mock.httpstatus.io/400')
//    .then(response=> response.text())
//    .then(()=>{console.log('Sucess1')})
//    .catch(error => console.log(error));

// Handling fetch errors
fetch('https://mock.httpstatus.io/200')
   .then(response => response.text())
   .then((data)=>{
     if (data !== '200 OK') {
        throw new Error(data);
      } else {
        console.log('Success');
      }
   })
   .catch(error => {console.log(error)});