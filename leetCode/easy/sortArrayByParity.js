var sortArrayByParity = function (nums) {
    if (!nums.length) return;
    if (nums.length === 1) return nums;
    let ctr = 0;
    for (let i = 0; i < nums.length; i++) {
      const element = nums[i];
      if (element % 2 === 0) {
        [nums[i], nums[ctr]] = [nums[ctr], nums[i]];
        ctr++;
      }
    }
    return nums;
  };
  
  const sortArrayByParityRes = sortArrayByParity([0]);
  console.log("sortArrayByParityRes", sortArrayByParityRes);