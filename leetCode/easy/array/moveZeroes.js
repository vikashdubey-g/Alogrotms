var moveZeroes = function (nums) {
  const len = nums.length;
  if (!len) return;
  let ctr = 0;
  for (let i = 0; i < len; i++) {
    const currEle = nums[i];
    if (currEle) {
      [nums[i], nums[ctr]] = [nums[ctr], nums[i]];
      ctr++;
    }
  }
  return nums;
};

const moveZeroesRes = moveZeroes([0, 1, 0, 3, 12]);
console.log("moveZeroesRes", moveZeroesRes);
