// if(2 == "2"){
//     console.log('Values are equal!');
// }

// if(2 === "2"){
// console.log('Values are equal')
// }else{
//     console.log('Values are not equal');
// }

// const score = 100;
// if(score > 50) console.log(`${score} is greater than 50`);

//Scope concept
// if(1 > 2){
//     const flag = true
//     console.log(`Condition is ${flag}`);
// }
// console.log(`Condition is ${flag}`);

//Using logical Operators
const user = {
    isLoggedIn: true,
    hasdebitCard: false,
    isLoggedInFromGoogle: false,
    isLoggedInFromEmail: true
}

if(user["isLoggedIn"] && user["hasdebitCard"]){
    console.log("Allowed to purchase course")
}else{
    console.log("User is not allowed to purchase course");
}

if(user.isLoggedInFromEmail || user.isLoggedInFromGoogle){
    console.log('Allowed to purchase course');
}else{
    console.log('User is not allowed to purchase course');
}

//Using if, else if, else statements
// const marks = 70;
// if(marks < 35){
//     console.log('Student Failed');
// }else if(marks>=35 && marks<=50){
//     console.log('Average');
// }else if(marks>50 && marks < 70){
//     console.log('Good');
// }else{
//     console.log('Distinction');
// }