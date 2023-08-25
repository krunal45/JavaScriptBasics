let studentScores = new Map();
studentScores.set('Ajay',23);
studentScores.set('Bobby',25);
studentScores.set('Charlie',21);
studentScores.set('David',21);
studentScores.size


function averageScore(studentScores){
   let score=0;

   for(let value of studentScores.values()){
        score = value + score;
   }

   score = score / studentScores.size;
   return score;
}

function getStudentScore(student){
    return studentScores.get(student);
}

console.log('Average Score :',averageScore(studentScores));
console.log('Charlie scored :'+getStudentScore('Charlie'));