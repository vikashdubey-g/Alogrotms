const fizzBuzz = (num) => {
  const result = [];
  for (let i = 1; i <= num; i++) {
    result.push(i);
  }
  for (let j = 0; j < result.length; j++) {
    if (result[j] % 3 === 0 && result[j] % 5 === 0) {
      result[j] = "FizzBuzz";
    }
    if (result[j] % 3 === 0) {
      result[j] = "Fizz";
    } else if (result[j] % 5 === 0) {
      result[j] = "Buzz";
    }
  }

  return result;
};

const fizzBuzzRes = fizzBuzz(15);
console.log("fizzBuzzRes", fizzBuzzRes);
