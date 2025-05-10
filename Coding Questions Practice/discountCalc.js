let actualPrice = 143;

function calculateDiscount(discountPercent) {
    let discount, finalPrice;
    
    if (discountPercent <= 50) {
        discount = (actualPrice * discountPercent / 100);
        finalPrice = (actualPrice - discount);
        return finalPrice;
    } else {
        // Calculate the discount based on the price after the initial 50% discount
        let firstDiscount = (actualPrice * 50 / 100);
        let priceAfterFirstDiscount = actualPrice - firstDiscount;
        
        discount = (priceAfterFirstDiscount * discountPercent / 100);
        finalPrice = (priceAfterFirstDiscount - discount);
        return finalPrice;
    }
}

let discountPercent = 60; // You can change this value to test different discount percentages
console.log(`While actual price is ${actualPrice} and discount is ${discountPercent} percent, then final price is: ` + calculateDiscount(discountPercent));
