function reverseString(name){
    let list = []   
    for(let i=name.length-1;i>=0;i--){
        list.push(name.charAt(i))
    }
    return list.join('')    
}

let name1 = 'Krunal'
console.log(`Reversed string of ${name1} is:`+reverseString(name1))