// Q => 2 Pallindrome number
// for string
// var isPalindrome = function (x) {
//   let newX = x.toString();
//   const length = newX.length;
//   for (let i = 0; i < length / 2; i++) {
//     if (newX[i] !== newX[length - 1 - i]) {
//       return `${x} is not a Pallindrome`;
//     }
//   }
//   return `${x} is a Pallindrome`;
// };

// const res = isPalindrome(-121);
// console.log("res", res);

// for anyNumber
// var isPalindrome = function (x) {
//   const cloneX = x;
//   let revNum = 0;
//   if (x < 0 || x > 2 ** 32 - 1) {
//     return false;
//   }
//   while (x > 0) {
//     let digit = x % 10;
//     revNum = revNum * 10 + digit;
//     x = parseInt(x / 10);
//   }
//   return revNum === cloneX;
// };

// let res = isPalindrome(10);
// res = isPalindrome(121);
// res = isPalindrome(-121);
// console.log("res", res);