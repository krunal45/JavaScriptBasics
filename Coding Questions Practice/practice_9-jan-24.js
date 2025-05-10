//Write a function countCharacters(str) that takes a string as an input and returns a Map where keys are individual characters,
// and values are the counts of each character in the string. Ignore case sensitivity, i.e., 'A' and 'a' should be considered the same character.
function getCharacterCount(inputString){
    let str1 = inputString.toLowerCase().replace(/ /g, '');
    let arr1 = str1.split('');
    console.log(arr1);
    let map1 = new Map();
    for(let i=0;i<str1.length;i++){
       if(map1.has(arr1[i])){
          count = map1.get(arr1[i]);
          console.log('count :'+count);
          map1.set(arr1[i],count + 1);
       }else{
          map1.set(arr1[i],1);
       }
    }
    return map1;
}

console.log(getCharacterCount('hello world'));