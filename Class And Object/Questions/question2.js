// Create a class called `MobilePhone` with the following properties:
// - `brand`
// - `model`
// - `price`

// Add a method called `showDetails()` that prints all the properties in a formatted string.

// Then, create an object of the class and call the `showDetails()` method.
class MobilePhone {
    constructor(brand,model,price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    };

    showDetails(){
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Price: ${this.price}`);
    };
};

const narzo = new MobilePhone('RealMe','narzo',12000);
narzo.showDetails();