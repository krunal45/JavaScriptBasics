function greet(timeOfDay){
    if(timeOfDay>=5 && timeOfDay<12)
        return 'Good Morning';
    else if(timeOfDay>=12 && timeOfDay<17)
        return 'Good Afternoon';
    else if(timeOfDay>=17 && timeOfDay<21)
        return 'Good Evening';
    else
        return 'Good Night';        
}

let timeOfDay = 21;
console.log(timeOfDay+": "+greet(timeOfDay));