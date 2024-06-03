/*
Absolutely! Let's talk about objects in JavaScript. Imagine you're creating a program to store information about a pet. The pet could be a dog, cat, or anything you like! 

Here's the question:

* How would you define an object in JavaScript to represent this pet? 
What properties (information) would you include about the pet? 
What methods (actions) could this object have? 

Think about things like the pet's name, breed, age, or maybe a method to make a sound.
There's no single right answer here, the key is to understand how to use objects to store data and define behaviors.

*/
function makeSound(cat){
    console.log('Meuw!');
    console.log(`name: ${cat.name}`);
    console.log(`breed: ${cat.breed}`);
    console.log(`age: ${cat.age}`);
}

let cat = new Object({
    name: 'Tom',
    breed: 'x1',
    age: 2
});

makeSound(cat);