let array = [2,4,6,8,10]

for(let n of array){
  console.log(n);
}

let array1=[];
array1[0]=2;
array1[99]=9;

for(let n of array1){
    console.log(n);
}

for(let n in array1){
    console.log(array1[n]);
}