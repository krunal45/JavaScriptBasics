let sentence = "hello world! how are you?";
sentence = sentence.replace(new RegExp(" ","g"),"");
console.log(sentence);
let characters = new Array();
characters = sentence.split("");
let charCount = new Map();

for(let char of characters){
    let count = 0;
    if(!charCount.has(char)){
    for(let i=0;i<sentence.length;i++){
        if(characters[i] === char){
            count ++;
        }
    }
    charCount.set(char,count);
}
    
}
console.log(charCount);