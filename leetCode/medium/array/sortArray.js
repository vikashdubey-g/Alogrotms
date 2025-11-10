var sortArray = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const curEle = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] > curEle) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = curEle;
  }
  return nums;
};

const sortArrayRes = sortArray([5,1,1,2,0,0]);
console.log("sortArrayRes", sortArrayRes);
