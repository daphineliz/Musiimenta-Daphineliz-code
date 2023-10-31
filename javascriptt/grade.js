function calculateGrade(score){

    try{
        if(score < 0 || score > 100){
            return "invalid input";
    } else if (score >=90){
        return "The student scored an A!";
    } else if(score >=80){
        return "The student scored a B!";
    } else if(score >=70){
        return "The student scored a C!";
    } else if(score >=60){
        return "The student scored a D!";
    } else if(score >= 0){
        return "The student scored an F, LMAO";
        
    }
} catch(error){
    return "Error u entered an invalid input";
}

}

const score = prompt("Enter the students score: ");

console.log(calculateGrade(score));
