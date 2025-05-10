// FizzBuzz Question -- Implement the classic FizzBuzz program using JavaScript. 
//Write a program that prints numbers from 1 to 100, 
//but for multiples of 3, print "Fizz" instead of the number, 
//and for multiples of 5, print "Buzz." For numbers that are multiples of both 3 and 5, print "FizzBuzz."
function fizzBuzz(){
    for(let i=1;i<=100;i++){
        if(i % 3 ===0 && i% 5 === 0)
            console.log('FizzBuzz');
        else if(i % 3 === 0)
            console.log('Fizz');
        else if(i % 5 ===0 )
            console.log('Buzz');
        else
            console.log(i);    
    }
}

fizzBuzz();