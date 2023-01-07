var isPowerOfThree = function (n) {
  if (n === 1) {
    return true;
  }
  while (n >= 3) {
    if (n % 3 !== 0) {
      return false;
    }
    n = n / 3;
  }
  return n === 1;
};

const isPowerOfThreeRes = isPowerOfThree();
console.log("isPowerOfThreeRes", isPowerOfThreeRes);
