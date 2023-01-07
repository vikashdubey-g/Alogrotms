var findMaxConsecutiveOnes = function (nums) {
  const len = nums.length;
  if (!len) return;
  let start = 0;
  let ctr = 0;
  let res = 0;
  while (start < len) {
    ctr += nums[start]; // storing the sum
    res = Math.max(res, ctr); // storing the max sum of 1 present in the list
    if (!nums[start]) ctr = 0; // resetting the counter if 0 found
    start++;
  }
  return res;
};
const findMaxConsecutiveOnesRes = findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
console.log("findMaxConsecutiveOnesRes", findMaxConsecutiveOnesRes);
