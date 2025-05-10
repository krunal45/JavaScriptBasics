let word = 'ma da m';
word = word.replace(/\s/g, "");
let reverseString='';
let charArray = word.split('');

console.log('Actual String : '+word);



function reverseAString(inputString){
       for(let i=inputString.length - 1;i>=0;i--){
           charArray[i] = charArray[i].replace(' ','');
           reverseString = reverseString + charArray[i];
       }
       return reverseString;
}

reverseString = reverseAString(word);
console.log('Reversed String : '+reverseString);

function checkPalindrome(word,reverseString){
    return (word === reverseString);
}

console.log('Is String '+word+' palindrome ? '+checkPalindrome(word,reverseString));