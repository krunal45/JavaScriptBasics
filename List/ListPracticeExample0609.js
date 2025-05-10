let listNums = [1,2,3,4,-5];
let targetSum = 7;
let sum = 0;
let outList = [];

function findLongestContiguousList(listNums,targetSum){
    for(let i=0;i<listNums.length;i++){  
        sum = sum + listNums[i];
        outList.push(listNums[i]);
        if(sum >= targetSum)
             break;
        }
    return outList;    
}

function reverseList(listNums){
    for(let i=listNums.length - 1;i==0;i--){
        outList.push(listNums[i]);
    }
    return outList;
}

outList = findLongestContiguousList(listNums,targetSum);
outList = reverseList(listNums);

for(let value of outList){
    console.log(value);
}