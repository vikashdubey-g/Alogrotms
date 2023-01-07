// [0, 1, 0, 3, 12]
var moveZeroes = function (nums) {
  let start = 0;
  let end = 0;
  while (end < nums.length) {
    if (nums[end] !== 0) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
    }
    end++;
  }
  return nums;
};

var moveZeroes = function (nums) {
  let ctr = 0
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element) {
      [nums[i], nums[ctr]] = [nums[ctr], nums[i]];
      ctr++;
    }
  }
  return nums;
};
const res = moveZeroes([0, 1, 0, 3, 12]);
console.log("res", res);

// Extra Space
// var moveZeroes = function (nums) {
//   const arr = [];
//   let start = 0;
//   let ctr = 0;
//   let end = nums.length - 1;
//   while (start <= end) {
//     if (nums[start] !== 0) {
//       arr.push(nums[start]);
//     } else {
//       ctr++;
//     }
//     start++;
//   }
//   for (let i = 1; i <= ctr; i++) {
//     arr.push(0);
//   }
//   return arr;
// };

const moveZeroesRes = moveZeroes([0, 1, 0, 3, 12]);

console.log("moveZeroesRes", moveZeroesRes);
