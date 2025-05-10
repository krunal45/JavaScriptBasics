let phoneBook = new Map();
phoneBook.set('Krunal','001');
phoneBook.set('Khyati','002');
phoneBook.set('Tinu','003');
phoneBook.set('Tinu','004');

console.log('--printing all values--');
for(let value of phoneBook.values()){
    console.log(value);
}

console.log('--printing all keys--');
for(let key of phoneBook.keys()){
    console.log(key);
}

console.log('--printing all entries--');
for(let [k,v] of phoneBook){
 console.log(k," : ",v);
}

phoneBook.forEach((v,k)=>{
    console.log(k," : ",v);
})