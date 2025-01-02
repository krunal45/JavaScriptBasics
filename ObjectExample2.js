//Singleton object
// let tinderUser = new Object
// console.log(tinderUser);

let tinderUser = {};
tinderUser.id = 123
tinderUser.name = "Krunal"
tinderUser.age = 17
console.log(tinderUser);

let regularUser = {
    email: 'user@gmail.com',
    name: {
         userFullName:{
            firstName: 'Alok',
            lastName: 'Agarval'
         }
    }
}
console.log('Email > ',regularUser["email"]);
console.log('firstName > ',regularUser.name.userFullName.firstName);
console.log('lastName > ',regularUser.name.userFullName.lastName);

// let obj1 = {1:'a',2:'b'}
// let obj2 = {3:'c',4:'d'}
// let obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

//spread operator
let obj1 = {1:'a',2:'b'}
let obj2 = {3:'c',4:'d'}
let obj3 = {...obj1,...obj2}
console.log(obj3);

//Fetching keys of Object
let tinderUserKeys = Object.keys(tinderUser)
tinderUserKeys.forEach(val=>console.log(tinderUser[val]))

//Fetching value of Object
let tinderUserValues = Object.values(tinderUser)
tinderUserValues.forEach(val=>console.log(val))

let properties = Object.getOwnPropertyNames(tinderUser)
console.log(properties);

//Verifying if certain property exists
let exists = tinderUser.hasOwnProperty('id')
console.log('id Property Exists ? '+exists);

exists = tinderUser.hasOwnProperty('id1')
console.log('id Property Exists ? '+exists);