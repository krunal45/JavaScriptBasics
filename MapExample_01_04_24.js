function wordLength(words){
let map1 = new Map();    
words.forEach((word)=>{map1.set(word,word.length)});
return map1;
}

let fruits = ['Apple','Banana','Chickoo'];
let map2 = new Map();
map2 = wordLength(fruits);
console.log(map2);