var plusOne = function (digits) {
  const len = digits.length;
  if (!len) return;
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits++;
      return digits;
    } else digits[i] = 0;
  }
  digits.push(0);
  digits[0] = 1;
  return digits;
};

const plusOneRes = plusOne([9, 9]);
console.log("plusOneRes", plusOneRes);
