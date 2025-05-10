let i=1; // step 1 : Initialize the variable.
while(i<6){ // step 2 : Condition check.
    console.log(`Hi ${i}`);
    i++; // step 3 : Increment
}
console.log(`${i}`);
i = --i; // Will decrement value of i first and will then assign it to variable.
while(i>0 && i<6){
    console.log(`Hi ${i}`);
    i--;
}