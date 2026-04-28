function checkGreaterTen(a) {
    const b= 10
    if (a>b){
        return "greater then ten";
    }
    else {
       return "not greater then 10";
    }
}
console.log(checkGreaterTen(15)); // "Greater than 10"
console.log(checkGreaterTen(5)); // "Not greater than 10"
console.log(checkGreaterTen(10)); // "Not greater than 10"