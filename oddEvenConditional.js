function oddEvenCheck(num){
    if(num % 2 == 0)
        return "Even";
    else
        return "Odd";    
}

let num = 116;
console.log(num+" is :"+oddEvenCheck(num));