/*
Question:
Create an object called car that represents a vehicle. This object should have the following properties:

make (a string representing the manufacturer of the car)
model (a string representing the model of the car)
year (a number representing the year the car was made)
color (a string representing the color of the car)
Additionally, add a method startEngine to the car object that prints the message "The engine is starting."
to the console when called.
*/

let car = new Object(
    {
        make: 'Maruti',
        model:'800',
        year: 1996,
        color: 'blue',
        startEngine: function(){
          console.log('The Engine is Starting.');
        }
    }
)

console.log(`Make: ${car.make}`);
console.log(`Model: ${car.model}`);
console.log(`Year: ${car.year}`);
console.log(`Color: ${car.color}`);
car.startEngine();