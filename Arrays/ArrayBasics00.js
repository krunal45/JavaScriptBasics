// Appending multiple elements to array!
let arr1 = [1,2]
console.log('--Before Append--')
for(let num of arr1){
    console.log(num)
}
let lengthOfArray = arr1.push(3,4)
console.log('--After Append--')
for(let num of arr1){
    console.log(num)
}
console.log('Length of array after adding elements > '+lengthOfArray)

// using concat
arr2 = [4,5]
arr3 = [6,7]
let arr4 = []
arr4 = arr1.concat(arr2,arr3)
arr4.forEach(value=>{console.log(value)})

// using filter
let arr5 = []
arr5 = arr4.filter((_undefined,indexArray,array)=>{return array[indexArray]>4})
for(let num of arr5){
    console.log(num)
}