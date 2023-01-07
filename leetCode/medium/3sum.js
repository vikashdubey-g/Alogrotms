// const threeSum = (nums, target) => {
//   const res = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === target) {
//           res.push([nums[i], nums[j], nums[k]]);
//         }
//       }
//     }
//   }
//   return res;
// };

// const threeSumRes = threeSum([-1, 0, 1, 2, -1, -4], 0);
// console.log("threeSumRes", threeSumRes);

var threeSum = function (nums) {
  let res = [];
  if (!Array.isArray(nums) || nums.length < 3) return res;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i >= 0 && nums[i] !== nums[i - 1]) {
      let sum = 0 - nums[i];
      let start = i + 1;
      let end = nums.length - 1;
      while (start < end) {
        if (nums[start] + nums[end] === sum) {
          res.push([nums[i], nums[start], nums[end]]);
          while (start < end && nums[start] === nums[start + 1]) start++;
          while (start < end && nums[end] === nums[end - 1]) end--;
          start++;
          end--;
        } else if (nums[start] + nums[end] < sum) {
          start++;
        } else {
          end--;
        }
      }
    }
  }

  return res;
};

const threeSumRes = threeSum([-1, 0, 1, 2, -1, -4]);
console.log("threeSumRes", threeSumRes);
