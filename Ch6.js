function factorial(num) {

  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(10)); // 3628800