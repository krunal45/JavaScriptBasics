let jsUser = {
    name: "Krunal",
    age:17,
    role: "QA",
    city: "Rajkot",
    isLoggedIn: true,
    lastLoggedInDays: ["Mon","Tue"]
}
// console.log('Name > '+jsUser.name);
// console.log('Age > '+jsUser["age"]);

// Freezing Object
// Object.freeze(jsUser);
// jsUser.name = 'Krunal1'
// console.log(jsUser);

// Un-Freeze Object
// There is no direct method to un-Freeze an object in js.
let mutableJSUser = jsUser;
mutableJSUser.greeting = function () {
    console.log(`Hello ${mutableJSUser.name}`);
    console.log(`Age > ${this.age}`);
}

console.log(mutableJSUser.greeting());