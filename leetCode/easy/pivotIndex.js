var pivotIndex = function (nums) {
  const len = nums.length;
  if (!len) return;
  let totalSum = 0;
  for (const items of nums) {
    totalSum += items;
  }
  let leftSum = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    const rightSum = totalSum - leftSum - nums[i];
    if (rightSum === leftSum) return i;
    leftSum += nums[i];
  }
  return -1;
};

const pivotIndexRes = pivotIndex([1, 7, 3, 6, 5, 6]);
console.log("pivotIndexRes", pivotIndexRes);
