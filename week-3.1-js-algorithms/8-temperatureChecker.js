function checkTemp(a) {

  if (a >= 91) {
    return "Hot";

  } else if (a >= 71) {
    return "Warm";

  } else if (a >= 51) {
    return "Mild";

  } else if (a >= 32) {
    return "Cold";

  } else {
    return "Freezing";
  }

}
 console.log(checkTemp(30)); // "Freezing"
 console.log(checkTemp(45)); // "Cold"
 console.log(checkTemp(65)); // "Mild"
 console.log(checkTemp(75)); // "Warm"
 console.log(checkTemp(95)); // "Hot"