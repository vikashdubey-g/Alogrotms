var sortedSquares = function (nums) {
  let len = nums.length - 1;
  for (let i = 0; i <= len; i++) {
    let sqr = nums[i] * nums[i];
    nums[i] = sqr;
  }

  // for (let i = 0; i <= len; i++) {
  //   for (let j = i + 1; j <= len; j++) {
  //     if (nums[i] > nums[j]) {
  //       [nums[i], nums[j]] = [nums[j], nums[i]];
  //     }
  //   }
  // }

  // for (i = 1; i <= len; i++) {
  //   let cur = nums[i];
  //   let j = i - 1;

  //   while (j >= 0 && nums[j] > cur) {
  //     nums[j + 1] = nums[j];
  //     j--;
  //   }
  //   nums[j + 1] = cur;
  // }
  let result = new Array(nums.length);
  let k = result.length - 1;
  let l = 0;
  let r = nums.length - 1;
  while (l <= r && k >= 0) {
    if (nums[l] > nums[r]) {
      result[k] = nums[l];
      l++;
    } else {
      result[k] = nums[r];
      r--;
    }
    k--;
  }
  return result;

  return nums;
  // return nums.sort((a, b) => a - b);
};
// const sortedSquaresRes = sortedSquares([-4, -1, 0, 3, 10]);
// console.log("sortedSquaresRes", sortedSquaresRes);
// var sortedSquares = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     nums[i] *= nums[i];
//   }
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] > nums[j]) {
//         [nums[i], nums[j]] = [nums[j], nums[i]];
//       }
//     }
//   }
//   return nums;
// };
// const sortedSquaresRes = sortedSquares([-4, -1, 0, 3, 10]);
// console.log("sortedSquaresRes", sortedSquaresRes);
