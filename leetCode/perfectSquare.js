// brute force method

// var isPerfectSquare = function (num) {
//   for (i = 1; i < num / 2; i++) {
//     if (i * i === num) {
//       return true;
//     }
//   }
//   return false;
// };

// const isPerfectSquareRes = isPerfectSquare(14);
// console.log("isPerfectSquareRes", isPerfectSquareRes);

// binary search

var isPerfectSquare = function (num) {
    let start = 1;
    let end = num;
    while (start <= end) {
      let mid = parseInt((start + end) / 2);
      let sqr = mid * mid;
      if (sqr === num) return true;
      if (sqr > num) {
        end = mid - 1;
      } else if (sqr < num) start = mid + 1;
    }
    return false;
  };
  
  const isPerfectSquareRes = isPerfectSquare(9);
  console.log("isPerfectSquareRes", isPerfectSquareRes);
  