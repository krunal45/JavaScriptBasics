function Rectangle(name,width,height) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = function () {
        return (this.width * this.height);
    }
};

// instantiating object instances
const rect1 = new Rectangle('rect1',3,1);
const rect2 = new Rectangle('rect2',2,1);

// Accessing property.
console.log(rect1.name,rect1.area());

// Adding new property
rect1.colour = 'blue';
rect1.perimeter = () => 2 * (rect1.width + rect1.height);
console.log(rect1.colour,rect1.perimeter());

// Deleting property
delete rect1.perimeter;
console.log(rect1);

// Check if property exists for specific object
console.log(rect1.hasOwnProperty('colour'));
console.log(rect2.hasOwnProperty('colour'));

// Get Keys
console.log(Object.keys(rect1));

// Get Values
console.log(Object.values(rect1));

// Get Entries
console.log(Object.entries(rect1));

// Looping through entries
for (let [k,v] of Object.entries(rect1)) {
    if (typeof v !== 'function') {
        console.log(`${k} - ${v}`);
    }
}