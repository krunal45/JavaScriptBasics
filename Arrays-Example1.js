const arr1 = [1,2,3] 
console.log('Datatype of array > ',typeof arr1)

console.log('index of number which is > 1 is > ',arr1.findIndex(element => element>1))
console.log(arr1.find(num => num%2==0));

len = arr1.push(true,'Krunal',5)
console.log('New length of array is > ',len);
console.log('New Array > ',arr1);

arr1.forEach(ele=>console.log(ele))

ele = arr1.filter(ele=>(typeof ele)=='boolean')
console.log(ele);

arr2 = arr1.map(ele =>(typeof ele)=="number")
console.log(arr2);