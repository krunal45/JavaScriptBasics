class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        this._firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        this._lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    }

    get fullName(){
        return this._firstName + this._lastName;
    }
}

const p1 = new Person();
console.log('Before Getter | Setter');
console.log(p1);
console.log('After Getter | Setter');
p1.firstName = 'ajay';
p1.lastName = 'dave';
console.log(`${p1.firstName} ${p1.lastName}`);