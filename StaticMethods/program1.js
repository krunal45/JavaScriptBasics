class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    static getClass() {
        return 'Car';
    }

    displayInfo() {
        console.log(`${this.brand} ${this.year}`);
    }
}

const tataNano = new Car('Tata',2000);
console.log(Car.getClass());
tataNano.displayInfo();