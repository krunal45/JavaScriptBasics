function isLeapYear(year){
    if(year % 400 !==0){
        if(year % 100 !== 0 && year % 4 ===0){
            return true;
        }else{
            return false;
        }
    }
    else if(year % 400 ===0){
        if(year % 100 === 0 && year % 4 === 0){
            return true;
        }else{
            return false;
        }
    }else {
        return false;
    }
}

let year = 2012;
console.log(`${year} is leap year ? : `+isLeapYear(year));