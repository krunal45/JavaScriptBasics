let employee = { 
    name: 'Krunal',
    designation: 'QA',
    laptop: {
     brand: 'HP',
     cpu: 'intel',
     ram: '2 GB'
    }
   };
   
   for (let key in employee) {
    console.log(key,employee[key]);
    for(let key in employee.laptop)
        console.log(key,employee.laptop[key]);
   }   

   let calendar = {
    type: 'English',
    start: 'January',
    end: 'December',
    noOfDays: 365,
    Days:{
      0: 'Sunday',
      1: 'Moonday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday'
    }
   }

   for(let key in calendar){
    console.log(key,calendar[key]);
    for(let key in calendar.Days)
        console.log(key,calendar.Days[key]);
   }