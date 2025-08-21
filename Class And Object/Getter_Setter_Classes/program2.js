function Person(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;

    Object.defineProperty(this, 'firstName', {
        get: function () {
            return this.capitaliseFirstLetter(this._firstName);
        },
        set: function (value) {
            this._firstName = value;
        }
    })

    Object.defineProperty(this, 'lastName', {
        get: function () {
            return this.capitaliseFirstLetter(this._lastName);
        },
        set: function (value) {
            this._lastName = value;
        }
    })

    Object.defineProperty(this, 'fullName', {
        get: function () {
            return this.firstName + ' ' + this.lastName;
        }
    })
}

Person.prototype.capitaliseFirstLetter = function (value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

const p1 = new Person('krunal', 'bhatt');
console.log(`${p1.firstName} ${p1.lastName}`);
console.log(`FullName: ${p1.fullName}`);

// Object Literals

const PersonObj = {
    _firstName: 'John',
    _lastName: 'Cena',

    get firstName() {
        return Person.prototype.capitaliseFirstLetter(this._firstName);
    },

    set firstName(value) {
        this._firstName = value;
    },
     get lastName() {
        return Person.prototype.capitaliseFirstLetter(this._lastName);
    },

    set lastName(value) {
        this._lastName = value;
    },

    get fullName(){
        return this.firstName + ' ' + this.lastName;
    }
}

const person2 = Object.create(PersonObj);
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.fullName);