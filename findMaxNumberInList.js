// Write a program to find the largest number in a list.
function findMaxNumberInList(numbers){
    if(numbers.length === 0){
        return null
    }
    let maxNumber = numbers[0]
    for (number of numbers){
        if(number > maxNumber){
            maxNumber = number
        }
    }
    return maxNumber
}

let numbers = [1,2,3]
console.log('Max Number > '+findMaxNumberInList(numbers))