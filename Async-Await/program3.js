async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

debugger;
async function getAllData() {
    const users = await getData('https://jsonplaceholder.typicode.com/users/1/albums?_limit=2');
    return users;
}

const data = await getAllData();
console.log(data);