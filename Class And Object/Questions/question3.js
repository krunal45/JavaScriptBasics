// Create a class called `Laptop` with the following properties:
// - `brand`
// - `processor`
// - `ram` (in GB)

// Add a method called `upgradeRam(additionalRam)` that increases the current RAM by the given amount 
// and then prints the updated RAM.

// Then:
// 1. Create an object of the class.
// 2. Call the `upgradeRam()` method with a value to simulate a RAM upgrade.
class Laptop {
    constructor(brand,processor,ram) {
        this.brand = brand;
        this.processor = processor;
        this.ram = ram;
    }

    upgradeRam(additionalRam){
     this.ram = this.ram + additionalRam;
     console.log(`UpdatedRAM: ${this.ram}`);
    }
};

const laptop1 = new Laptop('HP','Intel',2);
laptop1.upgradeRam(2);