const arr1 = [1,2,3];
const rotate = 2;
let currentPosition;
if(arr1.length > 0){
arr1.forEach(element => {
    currentPosition = arr1.findIndex((v)=>(v==element));
    console.log('current Position :'+currentPosition);
    if(rotate > arr1.length){
        console.log('Error! Rotate value cannot be greater than '+arr1.length);
    }
    else if(currentPosition > (arr1.length - 1)){
         currentPosition = 0;
    }
});}
else{
    console.log('Array is Empty!');
}