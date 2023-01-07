var isUgly = function (n) {
  let arr = [2, 3, 5];
  if (n <= 0) {
    return false;
  }

  const dividing = (dividend, divisor) => {
    while (dividend % divisor === 0) {
      dividend = dividend / divisor;
    }
    return dividend;
  };

  for (const items of arr) {
    n = dividing(n, items);
  }
  return n === 1;
};

const isUglyRes = isUgly(14);

console.log("isUglyRes", isUglyRes);
