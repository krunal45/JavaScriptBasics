function isEligibleForDiscount(isMember,purchaseAmount){
    if(isMember == true || purchaseAmount > 100)
        return true
    else
        return false    
}
let isMember = false
let purchaseAmount = 100
console.log('Eligible for discount > '+isEligibleForDiscount(isMember,purchaseAmount))