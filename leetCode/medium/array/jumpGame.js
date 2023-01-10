var canJump = function (nums) {
  if (!nums) return;
  let index = nums.length - 1;
  for (let i = index; i >= 0; i--) {
    if (nums[i] + i >= index) index = i;
  }
  return index === 0;
};

const canJumpRes = canJump([2, 3, 1, 1, 4]);
console.log("canJumpRes", canJumpRes);
