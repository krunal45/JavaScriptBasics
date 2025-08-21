// Constructor Function Example
debugger;
function Square(length,name) {
    this.length = length;
    this.name = name;
    this.area = function () {
        return (this.length * this.length);
    }
}

const square1 = new Square(2,'square1');
const area = square1.area();
console.log(area);