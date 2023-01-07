var plusOne = function (digits) {
  debugger;
  let start = 0;
  let end = digits.length - 1;
  while (end >= start) {
    if (digits[end] < 9) {
      digits[end]++;
      return digits;
    } else {
      digits[end] = 0;
    }
    end--;
  }
  digits.push(0);
  digits[0] = 1;
  return digits;
};

// var plusOne = function (digits) {
//   for (i = digits.length - 1; i >= 0; i--) {
//     if (digits[i] < 9) {
//       digits[i]++;
//       return digits;
//     } else {
//       digits[i] = 0;
//     }
//   }
//   digits.push(0);
//   digits[0] = 1;
//   return digits;
// };

const plusOneRes = plusOne([9, 9]);
console.log("plusOneRes", plusOneRes);
