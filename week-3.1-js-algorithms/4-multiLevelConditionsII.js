function checkEligibility (a){
    if (a>=21){
        return "can vote,drive,drink"
    }
    else if(a>=18){
            return "can vote and drive"
        }
        else if(a>=16){
            return "can drive"
        }
        else{ 
            return "cant vote,drive,or drink"
        }
    }

console.log(checkEligibility(15)); // "Can't vote, drive, or drink"
console.log(checkEligibility(16)); // "Can drive"
console.log(checkEligibility(18)); // "Can vote and drive"
console.log(checkEligibility(22)); // "Can vote, drive, and drink"