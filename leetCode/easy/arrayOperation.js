var applyOperations = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }

  // for (let i = 0; i < nums.length; i++) {
  //   const element = nums[i];
  //   if (!element) nums.push(nums.splice(nums.indexOf(element), 1)[0]);
  // }
  return nums
    .filter((item) => item !== 0)
    .concat(nums.filter((item) => item === 0));
};

const applyOperationsRes = applyOperations([1, 2, 2, 1, 1, 0]);
console.log("applyOperationsRes", applyOperationsRes);
