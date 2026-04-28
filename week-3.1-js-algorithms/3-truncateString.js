function truncateString(string, maxLength){
    if (string.length > maxLength){
        return string.slice(0, maxLength -3) + "...";
    }
    else {
        return string;
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11)); // "A-tisket..."
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14)); // "Peter Piper..."