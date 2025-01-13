// const nums = [1,2,3,4]
//way 1 for reduce
// const sum = nums.reduce(function (accuulator,currentValue){
//     console.log(`accumulator: ${accuulator} currentValue: ${currentValue}`);
//     return accuulator + currentValue
// },0);
// console.log(`Sum > ${sum}`);
//way 2 for reduce
// const mul = nums.reduce((accuulator,currentValue)=>(accuulator * currentValue),1)
// console.log(`Multiplication > ${mul}`);

const itemNames = [
    {
        "Item Type": "Laptop",
        "Item Price": 1200
    },
    {
        "Item Type": "Smartphone",
        "Item Price": 800
    },
    {
        "Item Type": "Headphones",
        "Item Price": 150
    },
    {
        "Item Type": "Monitor",
        "Item Price": 300
    },
    {
        "Item Type": "Keyboard",
        "Item Price": 100
    }
]

const totalItemPrice = itemNames.reduce((accuulator,Item)=>(accuulator + Item["Item Price"]),0)
console.log(totalItemPrice);