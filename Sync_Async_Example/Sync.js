const fs = require('fs');
const data = fs.readFileSync('Sync_Async_Example/Input.txt', 'utf8');
console.log(data.toString());
console.log('Bye!');