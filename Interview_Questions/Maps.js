function charsCount(name) {
    let map1 = new Map()
    // Convert name string to char[]
    let chars = name.split('')
    for (const char of chars) {
        count = 0
        if(map1.has(char)){
            map1.set(char,map1.get(char)+1)
        }else{
            map1.set(char,1)
        }
    }
    return map1
}
let name1 = 'Kruunal'
console.log(charsCount(name1))