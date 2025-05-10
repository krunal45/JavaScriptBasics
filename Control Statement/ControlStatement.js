// Import the readline module
const readline = require('readline');

// Create an interface for reading input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user to enter their name
rl.question('Please enter your name: ', (name) => {
    // Display a greeting with the entered name
    console.log(`Hello, ${name}! Welcome to our website.`);
    
    // Close the readline interface
    rl.close();
});
