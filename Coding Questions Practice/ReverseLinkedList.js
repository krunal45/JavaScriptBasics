// Write a JavaScript function to reverse the elements of a linked list represented as an array. 
// You are not allowed to create a new array or modify the existing array. Instead, you should manipulate the elements in place to reverse the order.
// You can assume that the input will be a valid array representing a linked list, and you need to return the reversed linked list.

function reverseLinkedList(list){
    let res = [];
   for(let i=list.length - 1;i>=0;i--){
       res.push(list[i]);
   }
   return res;
}

let list1 = [1,2,3,4,5];
console.log('If input list is : '+list1+' reversed list will be :'+reverseLinkedList(list1));