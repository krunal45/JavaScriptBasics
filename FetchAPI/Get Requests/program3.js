async function getCompletedToDo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3');
    const data = await response.json();
    return data.filter(toDo => toDo.completed === false);
};

const incompleteToDoList = await getCompletedToDo();
console.log(incompleteToDoList);