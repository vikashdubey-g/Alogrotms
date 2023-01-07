// conventional Method
const sort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  return nums;
};




const sortRes = sort([2, 8, 6, 4, 7, 1]);
console.log("sortRes", sortRes);
