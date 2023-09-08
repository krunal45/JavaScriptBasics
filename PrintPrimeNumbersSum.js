function sumPrimesInRange(start,end){
    let primeNumsList = [];
    let primeNumsSum = 0;
    for(let i=start;i<=end;i++){
        let count = 0;
        if(start!==0){
            for(let j=1;j<=i;j++){
              if(i % j === 0){
                count ++;
              }
            }
            if(count <= 2){
                primeNumsList.push(i);
            }
        }
    }
    console.log("Prime Numbers are : "+primeNumsList); 

    for(let value of primeNumsList){
        primeNumsSum = primeNumsSum + value;
    }
 
    if(primeNumsList.length > 0){
        return primeNumsSum;
    }
    else{
        return 0;
    }

}

let sumOfPrimeNums = sumPrimesInRange(8,10);
console.log("Sum of Prime Numbers is :"+sumOfPrimeNums);