class Rectangle {
    constructor(width,height) {
        this.width = width;
        this.height = height;
    }

    area(){
        return (this.width * this.height);
    };

    perimeter(){
        return 2 * (this.width + this.height);
    }

    isSquare(){
        return (this.width === this.height);
    }
};

const rect1 = new Rectangle(2,2);
console.log(rect1.area());
console.log(rect1.perimeter());
console.log(rect1.isSquare());

const rect2 = new Rectangle(3,2);
console.log(rect2.area());
console.log(rect2.perimeter());
console.log(rect2.isSquare());