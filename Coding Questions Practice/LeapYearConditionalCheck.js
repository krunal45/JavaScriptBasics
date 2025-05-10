function isLeapYear(year){
    if(year % 400 === 0){
        return true;
    }else if(year % 4 === 0 && year % 100 !==0){
        return true;
    }else {
        return false;
    }
}

let year = 2000;
console.log(year + " is Leap ? :"+isLeapYear(year));