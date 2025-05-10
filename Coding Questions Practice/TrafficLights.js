function trafficLight(signalColour){
    switch(signalColour){
        case 'Red':
            return 'Stop';
            
        case 'Yellow':
            return 'Slow Down';
            
        case 'Green':
            return 'Go';
            
        default:
            console.log('Please Enter Correct Input. Signal Colour can be 1.Red 2.Yellow or 3.Green');            

    }
}

let signalColour = 'Red'
console.log('If Signal Clour is :'+signalColour+" then :"+trafficLight(signalColour));