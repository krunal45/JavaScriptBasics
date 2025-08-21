const rectanglePrototypes = {
    area: function () {
        return this.height * this.width;
    },
    perimeter: function () {
        return 2 * (this.height + this.width);
    },
    isSquare: function () {
        return this.height === this.width;
    }
};

function createRectangle(name,width,height) {
    return Object.create(rectanglePrototypes,{
        height:{
            value:height
        },
        width:{
            value:width
        },
        name:{
            value:name
        }
    })
}

const rect1 = createRectangle('Rectangle 1',10,20);
console.log(rect1.name,rect1.width,rect1.area(),rect1.perimeter(),rect1.isSquare());