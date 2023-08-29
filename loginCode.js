function login(userName,password){
    if(userName == 'user123' && password == 'pass456')
        console.log('Login successful!');
    else
        console.log('Login failed. Please try again.');
}

let userName = 'user123';
let password = 'pass456'
login(userName,password);