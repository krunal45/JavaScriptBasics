function rotateArray(inputArray,k){
      let value;
      for(let i=0;i<k;i++){
            value = inputArray.pop(); 
            inputArray.unshift(value);     
            }
      return inputArray;      
}

let arr1 = [1,2,3,4,5];
console.log('--input Array--'+arr1);
let k = 3;
console.log('Shifting Array elements by '+k+' positions :'+rotateArray(arr1,k));

// Alternative Solution with O(n) Time Complexity:


// function rotateArray(inputArray, k) {
//       const n = inputArray.length;
//       // Ensure k is within the range [0, n]
//       k = k % n;
      
//       // Use array slicing to achieve rotation
//       const rotatedArray = inputArray.slice(n - k).concat(inputArray.slice(0, n - k));
      
//       return rotatedArray;
//     }
    