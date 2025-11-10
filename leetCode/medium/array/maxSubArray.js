var maxSubArray = function (nums) {
  let sum = 0;
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    maxSum = Math.max(maxSum, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
};
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let start = 0;
  let end = 0;
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum = currentSum + nums[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
        start = i;
        end = j;
      }
    }
  }
  return { sum: maxSum, subArray: nums.slice(start, end + 1) };
};

const maxSubArrayRes = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log("maxSubArrayRes", maxSubArrayRes);
