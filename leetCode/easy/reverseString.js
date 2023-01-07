var reverseString = function (s) {
  const len = s.length - 1;
  for (let i = 0; i <= len / 2; i++) {
    [s[i], s[len - i]] = [s[len - i], s[i]];
  }
  return s;
};

// var reverseString = function (s) {
//   const len = s.length - 1;
//   for (let i = 0; i <= len / 2; i++) {
//     let temp = s[i];
//     s[i] = s[len - i];
//     s[len - i] = temp;
//   }
//   return s;
// };

const reverseStringRes = reverseString(["h", "e", "l", "l", "o"]);
console.log("reverseStringRes", reverseStringRes);
