function isLeapYear (a) {
    if (a % 400===0){
        return "leap year";
    }
    else if (a%100===0){
        return "not a leap year";
    }
    else if(a%4===0){
        return " leap year";
    }
    else {
        return "not a leap year"
    }
}

 
console.log(isLeapYear(2000)); // "Leap year"
console.log(isLeapYear(1800)); // "Not a leap year"
console.log(isLeapYear(2004)); // "Leap year"
console.log(isLeapYear(2021)); // "Not a leap year"