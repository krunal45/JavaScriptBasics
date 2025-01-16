class Car{

    constructor(make,model,year,color,mileage){
        this.make = make
        this.model = model
        this.year = year
        this.color = color
        this.mileage = mileage
    }
}

const Toyota = new Car('Toyota','Camry',2021,'Blue',15000)
console.log('make: '+Toyota.make);
console.log('model: '+Toyota.model);
console.log('year: '+Toyota.year);
console.log('color: '+Toyota.color);
console.log('mileage: '+Toyota.mileage);

const student = {
    name: 'Brahma',
    age:18,
    gender:'male'
}
console.log(`name: ${student.name}`);
console.log(`age: ${student.age}`);
console.log(`gender: ${student.gender}`);