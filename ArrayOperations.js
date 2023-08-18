let data = [1,2,3],len;
// printData(data);
// let element;
function printData(data){
console.log(data);
}
// len = data.push(4);
// printData(len);
// printData(data);
// element = data.pop();
// printData(element);
// printData(data);
// element = data.shift();
// printData(element);
// len = data.unshift(2);
// console.log('New Length of Array :'+len);
// printData(data);

let data1 = [2,4,6,8,10,12];
printData(data1);
let deletedElements = data1.splice(1,2,14,16);
printData(deletedElements);
printData(data1);
len = data1.push(16,20,24,28,32);
printData(data1);
printData(len);