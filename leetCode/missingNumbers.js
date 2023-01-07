var missingNumber = function (nums) {
  debugger;
  const naturalNums = [];
  const len = nums.length;
  let res;
  for (let i = 0; i <= len; i++) {
    naturalNums.push(i);
  }

  for (let j = 0; j <= len; j++) {
    let compEle = naturalNums[j];
    for (let k = 0; k < len; k++) {
      if (compEle === nums[k]) {
        console.log("first", nums[k]);
      }
    }
  }
  return res;
};

// var missingNumber = function (nums) {
//     const set = new Set();
//     const len = nums.length;
//     for (let i = 0; i <= len; i++) {
//       set.add(i);
//     }
//     for (let j = 0; j < len; j++) {
//       if (set.has(nums[j])) {
//         set.delete(nums[j]);
//       }
//     }
//     const [firstEle] = set;
//     return firstEle;
//   };

// var missingNumber = function (nums) {
//   const len = nums.length;
//   let sum = 0;
//   let originalSum = (len * (len + 1)) / 2;
//   for (let i = 0; i < len; i++) {
//     sum += nums[i];
//   }
//   return originalSum - sum;
// };

const missingNumberRes = missingNumber([3, 0, 1]);
console.log("missingNumberRes", missingNumberRes);
