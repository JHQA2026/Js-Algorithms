function fizzBuzzSimplified(a){
  if (a % 3 === 0 && a % 5 === 0){
    return "FizzBuzz";
  }
   else if (a % 3 === 0){
    return "Fizz";
  }
   else if (a % 5 === 0){
    return "Buzz";
  }
   else {
    return a;
  }
}

 console.log(fizzBuzzSimplified(3)); // "Fizz"
 console.log(fizzBuzzSimplified(5)); // "Buzz"
 console.log(fizzBuzzSimplified(15)); // "FizzBuzz"
 console.log(fizzBuzzSimplified(2)); // 2