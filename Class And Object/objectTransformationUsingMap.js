//You have an array of objects representing products, 
//and you want to transform it into a new array of objects,
//but with a slight change. Each object in the original array has a property price,
// and you want to create a new array where the price is converted from USD to another currency
// (e.g., EUR or GBP) using a provided exchange rate.
// Write a function convertPrices that takes an array of products and an exchange rate
// as parameters and returns a new array of products with the updated prices.

function convertPrices(products,exchangeRate){
    let newproductListGBP = [{}];
    newproductListGBP = products.map((v)=>({
        products: v.products,
        price:(v.price)*exchangeRate
    }));
    return newproductListGBP;
}

let productListUS = [{'products':'Parle','price':4},{'products':'Tomatoes','price':10}];
console.log('product Prices GBP : '+JSON.stringify(convertPrices(productListUS,0.81173439)));