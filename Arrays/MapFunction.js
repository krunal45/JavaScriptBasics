// In this script we will learn how can we use map function.
// 1. Adding 2 to each value of Array
let arr1 = [1,2,3];
let maparr1 = arr1.map((val)=> val + 2);
console.log(maparr1);

// 2.Feh to Degree Temperature.
// Feh > Cel > (F - 32) * (5/9)

let fahTemp = [32,36,65,98]

function fahToCel(fah){
    return (fah - 32) * (5/9)
}

let celTemp = fahTemp.map(fahToCel);
console.log(celTemp);