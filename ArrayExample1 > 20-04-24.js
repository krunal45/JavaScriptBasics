/*
Write a function in JavaScript that takes an array of strings as input and returns a new array containing
only the strings that have a length greater than 5 characters
*/
function getNameWithCharacterLengthLessThanFive(names){
return names.filter((name)=>{
        if(name.length < 5)
            return name;
    })
}

function getNameWithCharacterLengthGreaterThanFive(names){
    return names.filter((name)=>{
            if(name.length > 5)
                return name;
        })
    }


function getNameStartingWithACharacter(names,character){
    return names.filter((name)=>{
            if(name.startsWith(character))
                return name;
        })
    }
let names = ["John", "Emma", "Alexander", "Sophia", "William", "Olivia", "Michael", "Ava", "Matthew", "Isabella"];
console.log(`Names with character length greater than 5 are:`+getNameWithCharacterLengthGreaterThanFive(names));
console.log(`Names starting with character J are:`+getNameStartingWithACharacter(names,'J'));