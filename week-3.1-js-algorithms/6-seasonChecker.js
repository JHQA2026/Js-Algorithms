function checkSeason(a){
    if (a === 12 || a===1 || a===2){
        return "winter";
    }
    else if (a===3 || a===4 || a===5){
        return "spring";
    }
    else if (a===6 || a===7 || a===8){
        return "summer";
    }
    else if (a===9 || a===10 || a===11){
        return "fall";
    }
}

console.log(checkSeason(1)); // "Winter"
console.log(checkSeason(4));//"spring"
console.log(checkSeason(7)); // "Summer"
console.log(checkSeason(10)); // "Autumn"