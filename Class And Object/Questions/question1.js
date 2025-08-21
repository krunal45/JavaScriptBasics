// Create a JavaScript class called `Car` that has the following:

// - A constructor that takes `brand` and `year` as parameters.
// - A method called `displayInfo()` that logs the car's brand and year.

// Then, create an object of the `Car` class and call the `displayInfo()` method.
debugger;
class Car {
    constructor(brand,year) {
        this.brand = brand;
        this.year = year;
    }

    displayInfo(){
        console.log(`Brand: ${this.brand} Year: ${this.year}`);
    }
}

const bmw = new Car('bmw','2001');
bmw.displayInfo();
