function checkGrade(marks){
   if(marks >= 90){
    return 'A';
   }
   else if(marks >= 80 && marks<=89){
    return 'B';
   }
   else if(marks >=70 && marks<=79){
    return 'C';
   }
   else if(marks>=60 && marks<=69){
    return 'D';
   }
   else(marks < 60)
   {
    return 'F';
   }
   }

   let marks = 59;
   let grade = checkGrade(marks);
   
   console.log(`I got ${marks} marks then i got :${grade} Grade.`);