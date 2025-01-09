// let nzRegions = ['Auckland','Canterbury','Wellington','Otago','Waikato']
// nzRegions.forEach(element => console.log(element))

// const numbers = [1,2,3]
// numbers.forEach(number => console.log(`${number} * 2 = ${number * 2}`))

// let fruits = ['Apple','Banana','Orange','Mango','Grapes']
// function printFruits(fruits) {
//     console.log(fruits);
// }
// fruits.forEach(printFruits)
// fruits.forEach((val,index,arr)=>{
//     console.log(val,index,arr);
// })

//json Array
let jsonArray1 = [
    {
      "name": "Apple",
      "color": "Red",
      "price": 1.00,
      "origin": "USA"
    },
    {
      "name": "Banana",
      "color": "Yellow",
      "price": 0.50,
      "origin": "Ecuador"
    },
    {
      "name": "Orange",
      "color": "Orange",
      "price": 0.75,
      "origin": "Brazil"
    }
  ]

  jsonArray1.forEach((jsonObject)=>{
    console.log(`Name > ${jsonObject.name}`);
    console.log(`Colour > ${jsonObject.color}`);
    console.log(`Price > ${jsonObject.price}`);
    console.log(`Origin > ${jsonObject.origin}`);
  })