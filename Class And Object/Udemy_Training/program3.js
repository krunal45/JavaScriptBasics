class Shape {
    constructor(name) {
        this.name = name;
    }

    logName() {
        console.log(this.name);
    }
};

class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
};

class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }

    // Over-riding logName();
    logName() {
        console.log('Circle : ',this.name);
    }
}

const rect1 = new Rectangle('Rect 1', 10, 10);
console.log(rect1);
rect1.logName();

const cir1 = new Circle('Cir 1', 10);
console.log(cir1);
cir1.logName();

// using instanceOf()
console.log(rect1 instanceof Rectangle);
console.log(rect1 instanceof Circle);
console.log(rect1 instanceof Shape);