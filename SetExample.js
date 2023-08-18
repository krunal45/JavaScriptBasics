let name1 = new Set("KKruunnaall");
console.log(name1);
let mixSet = new Set();
mixSet.add(1);
mixSet.add(1);
mixSet.add(2);
mixSet.add(2);
mixSet.add(3);
mixSet.add('Krunal')
mixSet.add(true)

for(let key of mixSet){
    console.log(key);
}

mixSet.forEach(v => console.log(v));
console.log(mixSet.has('krunal'));