function returnNumsMap(nums) {
    let numsMap = new Map();
    for (let num of nums) {
      if (numsMap.has(num)) {
        numsMap.set(num, numsMap.get(num) + 1);
      } else {
        numsMap.set(num, 1);
      }
    }
    return numsMap;
  }
  
  let numbers = [1, 2, 1, 4, 4, 1, 2, 1, 0];
  for (let [num, count] of returnNumsMap(numbers)) {
    console.log(num + ': ' + count);
  } 