/*
I'd be glad to act as your JavaScript tutor! Let's test your understanding of loops with a beginner-friendly question:

**Challenge:**

Write a JavaScript program that uses a loop to print all the even numbers from 2 to 20 (inclusive). 

**Hint:**

* You can use a `for` loop to repeat a block of code a specific number of times.
* The loop will need a variable to keep track of the current number being printed.
* You'll need a condition to check if the current number is even.
* To print even numbers, you can use the modulo operator (`%`) to check if the remainder when dividing by 2 is 0.

Remember, I won't provide the solution just yet. Try your best to write the code yourself. 
If you get stuck, feel free to ask for further clarification or ask me to walk you through the steps one by one. Good luck!
*/

function printEvenNumbers(){
 for(let i=2;i<=20;i++){
    if(i%2===0)
        console.log(i);
 }
}

printEvenNumbers();