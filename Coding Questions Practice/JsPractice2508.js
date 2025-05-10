let squareNum = new Map(); 
let nums = [2,4,5,6,9,10,13];
function square(num){
   squareNum.set(num,Math.pow(num,2));
}

for(let value of nums){
     square(value);
}

// for(let key of squareNum.keys()){
//     console.log(key,squareNum.get(key));
// }

for(let value of squareNum.values()){
    console.log(value);
}

squareNum.forEach((v,k)=> {
    console.log(k,v);
}

)

// for(let [key,value] of squareNum){
//    console.log(key,value);
// }
// for(let [k,v] of squareNum){
//     console.log(k,' : ',v);
// }