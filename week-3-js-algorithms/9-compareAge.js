function compareAge (name,age){
    const myAge=25
    if (age>myAge){
        return name + " is older then me" ;
    }
    else {
        return name + " is younger then me";
    }
}

console.log(compareAge("Joel", 36))
console.log(compareAge("Samuel", 24))
console.log(compareAge("Lily", 28))