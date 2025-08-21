debugger;
function Rectangle(name,width,height) {
    this.name = name;
    this.width = width;
    this.height = height;
};

// Adding area function into prototype
Rectangle.prototype.area = function () {return this.width * this.height};
Rectangle.prototype.perimeter = function () {
    return 2 * (this.width + this.height);
}

const rect1 = new Rectangle('Rectangle 1',2,3);
console.log(rect1.area());
console.log(rect1.perimeter());