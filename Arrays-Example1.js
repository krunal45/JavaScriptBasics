// const arr1 = [1,2,3] 
// console.log('Datatype of array > ',typeof arr1)

// console.log('index of number which is > 1 is > ',arr1.findIndex(element => element>1))
// console.log(arr1.find(num => num%2==0));

// len = arr1.push(true,'Krunal',5)
// console.log('New length of array is > ',len);
// console.log('New Array > ',arr1);

// arr1.forEach(ele=>console.log(ele))

// ele = arr1.filter(ele=>(typeof ele)=='boolean')
// console.log(ele);

// arr2 = arr1.map(ele =>(typeof ele)=="number")
// console.log(arr2);

let arr3 = ['A','B','C']
let arr4 = ['D','E','F']

//push method
// arrayLength = arr3.push(arr4)
// console.log(arrayLength);
// console.log(arr3);
// console.log(arr3[3][0]);

//concat method
// arr5 = arr3.concat(arr4)
// console.log('arr3 > '+arr3);
// console.log('arr5 > '+arr5);

//spread operator
// let arr6 = [...arr3,...arr4]
// console.log(arr6);

//flat 
// let arr7 = [0,1,[2,3]]
// arr7 = arr7.flat()
// console.log('arr7 > '+arr7);

// arr7 = [0,1,[2,3],3,4,[1,1,1,[7,8]]]
// arr7 = arr7.flat()
// console.log('arr7 > '+arr7);

// let name1 = "Apple"
// console.log(Array.isArray(name1));
// console.log(Array.from(name1));

// let student = {
//     name: "Ajay",
//     rollNo: 2
// }
// console.log(Array.from(Object.values(student)));
// console.log(Array.from(Object.entries(student)));

let score1 = 10
let score2 = 20
let score3 = 30

console.log(Array.of(score1,score2,score3));