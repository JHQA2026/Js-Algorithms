function convertNumbersToStrings(arr) {

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(String(arr[i]));
  }

  return result;
}

console.log(convertNumbersToStrings([1, 2, 3, 4, 5])); // ["1", "2", "3", "4", "5"]
console.log(convertNumbersToStrings([10, 20, 30, 40, 50])); // ["10", "20", "30", "40", "50"]
console.log(convertNumbersToStrings([-1, -2, -3, -4, -5])); // ["-1", "-2", "-3", "-4", "-5"]