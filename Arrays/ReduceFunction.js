// Multiplying all numbers.
let numbers = [1,2,3,4,5]
let multiply = numbers.reduce((accumulator,currentVal)=>accumulator * currentVal,1);
console.log(multiply);

// Finding minimum number in array.
let minimumNumber = numbers.reduce((minimum,currentVal)=>{
    if(currentVal < minimum){
        return currentVal;
    }else{
        return minimum;
    }
})
console.log('minimumNumber',minimumNumber);

// Calculating Total Cost of Items in shopping cart
let cartItems = [
    {
      "Item Name": "Laptop",
      "Item Price": 1200.00
    },
    {
      "Item Name": "Wireless Mouse",
      "Item Price": 25.99
    },
    {
      "Item Name": "Headphones",
      "Item Price": 150.50
    },
    {
      "Item Name": "Keyboard",
      "Item Price": 80.00
    }
  ];

  let totalCost = cartItems.reduce((total,currentVal)=>total + currentVal["Item Price"],0);
  console.log('totalCost',totalCost);