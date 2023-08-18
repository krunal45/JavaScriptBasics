let day='Saturday';
switch(day){
    case 'Monday':
        console.log('4:00 AM');
        break;
    case 'Tuesday':
        console.log('5:00 AM');
        break;
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log('6:00 AM');   
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('8:00 AM');
        break;
    default:
        console.log('Wakeup at own convenience.')                         
}