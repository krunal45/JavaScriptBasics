let nums = [1,2,3];
console.log('before:'+nums);

nums = nums.map((e)=>(e*2));
console.log('after:'+nums);

let temp = [32,50,60];
function fahToCel(fah){
 return (fah - 32) * (5/9);
}

let celTemp = temp.map(fahToCel);
console.log(celTemp);