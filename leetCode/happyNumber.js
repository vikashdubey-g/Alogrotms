const sumOfNumber = (num) => {
    console.log('n', num)
  let sum = 0;
  while (n > 0) {
    const digit = n % 10;
    n = Math.floor(n / 10);
    sum = sum + digit * digit;
  }
  return sum;
};

const isHappy = (n) => {
  const set = new Set();
  while (n !== 1 && !set.has(n)) {
    set.add(n);
    n = sumOfNumber(n);
  }
  return n === 1;
};

const isHappyRes = isHappy(19);
console.log("isHappyRes", isHappyRes);
