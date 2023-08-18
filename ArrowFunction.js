// let result = (num1,num2) => (num1*num2);
// console.log(result(23,2));

let res = (num1,num2) => {
                          if(num1 > 0 && num2 > 0 ){
                            return (num1 + num2);
                          } else{
                            console.log('Inputs should be greater than 0');
                            return -1;
                          }
                         };
 console.log(res(2,-3));
 
 let name1 = (name) => console.log(`My name is ${name}`);
 name1('Krunal');