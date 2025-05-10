function checkNumberRange(numberToCheck,lowerRange,UpperRange){
    for(let i=lowerRange;i<=UpperRange;i++){
        if (i === numberToCheck)
            return true;
    }
    return false;
}

let numberToCheck = 6;
let lowerRange = 1;
let UpperRange = 5;
console.log(`${numberToCheck} is between ${lowerRange} & ${UpperRange} : `+checkNumberRange(numberToCheck,lowerRange,UpperRange));