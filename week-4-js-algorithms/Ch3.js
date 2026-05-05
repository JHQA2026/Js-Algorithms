function findDollarStrings(arr) {

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("$")) {
      result.push(arr[i]);
    }
  }

  return result;
}


console.log(findDollarStrings(["I", "have", "$10"])); // ["$10"]
console.log(findDollarStrings(["$", "$$", "$$$"])); // ["$", "$$", "$$$"]
console.log(findDollarStrings(["no", "dollars", "here"])); // []