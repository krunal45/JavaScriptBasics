let mixData = [32,'Krunal',{name:'Krunal',age:32},function printMsg(){
    console.log('Hello!');
}];
console.log(mixData);

for(let index in mixData){
    console.log(mixData[index]);
}
mixData[3]()