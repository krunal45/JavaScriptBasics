const fs = require('fs');

// Read data from a file
fs.readFile('Sync_Async_Example/Input.txt', 'utf8', (err, data) => {
    console.log(data);
});

console.log('Bye!');