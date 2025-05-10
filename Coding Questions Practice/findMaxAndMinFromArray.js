let nums = [121, 233, 1, 2, 45, 91];

function findMin(nums){
    let minNum = nums[0];
    
    for(let i=1;i<nums.length;i++){
    if(nums[i]<minNum)
        minNum = nums[i];
    }
    return minNum;
}

function findMax(nums) {
    let maxNum = nums[0];

    for(let i=1;i<nums.length;i++){
        if(nums[i]>maxNum)
            maxNum = nums[i];
        }
        return maxNum;

}

console.log('Min Number is :'+findMin(nums));
console.log('Max Number is :'+findMax(nums));