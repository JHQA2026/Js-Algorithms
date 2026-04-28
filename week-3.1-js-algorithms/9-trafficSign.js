function checkSign (a){
    if (a==="green"){
        return "Go"
    }
    else if (a==="yellow"){
        return "caution"
    }
    else if (a==="red"){
        return "stop"
    }
}

console.log(checkSign("red")); // "Stop"
console.log(checkSign("yellow")); // "Caution"
console.log(checkSign("green")); // "Go"