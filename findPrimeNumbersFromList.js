function isNumberPrime(number){
if(number<=1){
    return false
}
else if(number==2 || number==3){
    return true
}
else if(number%2===0){
    return false
}
else{
    for(let i=3;i<=Math.sqrt(number);i+=2){
        if(number%i==0){
            return false
        }
    }
}
return true
}

function getPrimeNumbersFromList(numbers){
 let primeNumbers = []
 for(number of numbers){
    if(isNumberPrime(number))
    {
        primeNumbers.push(number)
    }
 }
 return primeNumbers
}

let numbers = [1,3,5,9,11,13,12,15]
console.log('Prime Numbers > '+getPrimeNumbersFromList(numbers))