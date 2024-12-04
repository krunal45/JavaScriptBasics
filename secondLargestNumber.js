function findSecondLargestNumber(array1){
let finalArray = []
if(array1.length > 0){    
if(areAllNumbersEqual(array1))
    return null
else
   finalArray = sortArray(array1)
}
else{
    return null
}
finalArray = getUniqueElements(finalArray)
finalArrayLength = finalArray.length
return finalArray[finalArrayLength - 2]   
}

function getUniqueElements(array1){
return array1.filter((_,index)=>array1[index]!==array1[index+1])
}

function sortArray(array1){
    let temp = null
    for(let index=0;index<array1.length;index++){
        if(index!=(array1.length-1)){
            if(array1[index]>array1[index+1]){
                temp = array1[index]
                array1[index] = array1[index+1]
                array1[index+1] = temp
            }
        }
    }
    return array1
}

function areAllNumbersEqual(array1){
    let count = 0
    for(let index=1;index<array1.length;index++)
    {
        if(array1[0]>array1[index] || array1[0]<array1[index]){
            return false
        }else{
            count ++
        }
    }
    if(count === array1.length - 1){
        return true
    }
}
    
let array1 = [-1,2,3]
maxNumber = findSecondLargestNumber(array1)
console.log(`Second Largest number from ${array1} is :`+maxNumber)


// Code from chat - GPT for the same
// function findSecondLargestNumber(array1) {
//     if (array1.length < 2) return null; // Not enough elements to find the second largest
    
//     if (areAllNumbersEqual(array1)) return null; // All numbers are equal

//     let sortedUniqueArray = getUniqueElements(sortArray(array1));

//     if (sortedUniqueArray.length < 2) return null; // Less than two unique numbers

//     return sortedUniqueArray[sortedUniqueArray.length - 2]; // Second largest number
// }

// function getUniqueElements(array1) {
//     return [...new Set(array1)]; // Remove duplicates using Set
// }

// function sortArray(array1) {
//     return array1.sort((a, b) => a - b); // Sort in ascending order
// }

// function areAllNumbersEqual(array1) {
//     return array1.every((num) => num === array1[0]); // Check if all elements are equal
// }

// // Test case
// let array1 = [-1, 2, 3];
// let maxNumber = findSecondLargestNumber(array1);
// console.log(`Second largest number from ${array1} is: ${maxNumber}`);
