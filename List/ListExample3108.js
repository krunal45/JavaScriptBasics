let names = ["Alicea", "Boba", "Charlief", "David", "Eve", "Frank"];
let outNames = new Array();

for(n of names){
    
  if(n.length % 2 === 0){
    outNames.push(n);
   }
}

for(n of outNames){
console.log(n);
}