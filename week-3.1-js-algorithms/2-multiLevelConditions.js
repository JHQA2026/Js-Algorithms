function assignGrade(sgrade){
    if (sgrade >= 90) { 
        return "A";
    }
    else if (sgrade >=80){
        return "B";
    }
    else if (sgrade >=70){
        return "C";
    }
    else if (sgrade >=60){
        return "D"
    }
    else if (sgrade >=50){
        return "F"
    }
}

console.log(assignGrade(95)); // "A"
console.log(assignGrade(85)); // "B"
console.log(assignGrade(75)); // "C"
console.log(assignGrade(65)); // "D"
console.log(assignGrade(55)); // "F"
