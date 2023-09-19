function calculate(operation,num1,num2){
    switch(operation){
        case '+':
            return (num1 + num2);
        case '-':
            return (num1 - num2);
        case '*':
            return (num1 * num2);
        case '/':
            return (num1 / num2);
        default:
            return 'Invalid Operator selected. Please choose from + | - | * or /';  
    }              
}

let num1 = 2
let num2 = 3;
console.log(`${num1} / ${num2} = `+calculate('?',num1,num2));