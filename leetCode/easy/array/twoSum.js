var twoSum = function (nums, target) {
  const len = nums.length;
  if (!len) return;
  const set = new Set();
  for (let i = 0; i <= len; i++) {
    const currEle = nums[i];
    const complement = target - currEle;
    if (set[complement] !== undefined) return [set[complement], i];
    else set[currEle] = i;
  }
};

const twoSumRes = twoSum([2, 7, 11, 15], 9);
console.log("twoSumRes", twoSumRes);
