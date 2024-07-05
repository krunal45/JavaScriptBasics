/*
I'd be glad to act as your JavaScript tutor! Here's a beginner-level coding question based on the object concept:

Imagine you're creating a program to manage information about books in a library.
How would you define an object to represent a single book? Think about the properties (data)
a book might have, such as its title, author, and genre. You can also consider methods (functions)
that could be useful for working with books, like checking if a book is available or calculating its
overdue fee (if applicable).

**Challenge:** Write some JavaScript code to define a `Book` object with appropriate properties 
and maybe even a method. Don't worry about making it perfect, just focus on capturing the essence of a book object.

**Hint:** You can use curly braces `{}` to define an object and specify key-value pairs to represent properties and methods.

I'll be happy to help you review your code and answer any questions you have about objects in JavaScript!
*/
let Book = {
    'Title': 'BookA',
    'Author': 'John',
    'Genre': 'Horror',
    'Available': true,
    'Price': 20,
    checkAvailability(){
        if(this.Available)
            console.log('Book is available.');
        else
            console.log('Book isn\'t available.');    
    } 
}
console.log(`Title: `+Book.Title);
console.log(`Author: `+Book.Author);
console.log(`Genre: `+Book.Genre);
console.log(`Available: `+Book.Available);
console.log(`Price: `+Book.Price);
console.log(Book.checkAvailability());