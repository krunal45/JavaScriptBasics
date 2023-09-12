function findLargestNumber(num1,num2,num3){
    if(num1 > num2){
        if(num1 > num3)
            return num1;
        else
            return num3;    
    }else if(num2 > num3){
        return num2;
    }else {
        return num3;
    }
}

let num1 = 1,num2 = 2,num3 = 3;
console.log("Largest number out of "+num1+","+num2+","+num3+" is "+findLargestNumber(num1,num2,num3));
