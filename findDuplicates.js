//[1,2,3,1]
function findDuplicates(input){
let output = [];
    for(let i=0;i<input.length;i++){
        for(let j = (i+1);j<input.length;j++){
            if(input[i]===input[j]){
                if(output.lastIndexOf(input[j])===-1)
                {
                 output.push(input[j]);
                }
            }
        }
    }
    return output;
}

let arr1 = [1,2,3,1,3,5,6,5];
console.log('Duplicate elements in '+arr1+' are : '+findDuplicates(arr1));

//alternate Way : 
// function findDuplicates(inputArray) {
//     const seen = {}; // Use an object to store seen elements
//     const duplicates = [];
  
//     for (let i = 0; i < inputArray.length; i++) {
//       const element = inputArray[i];
  
//       if (seen[element]) {
//         // If the element has been seen before, it's a duplicate
//         duplicates.push(element);
//       } else {
//         // Mark the element as seen
//         seen[element] = true;
//       }
//     }
  
//     return duplicates;
//   }
  
//   let arr1 = [1, 2, 3, 2, 4, 5, 4];
//   console.log('Input Array: ' + arr1);
//   const duplicateElements = findDuplicates(arr1);
//   console.log('Duplicate Elements: ' + duplicateElements);
  