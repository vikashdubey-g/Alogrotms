var findKthLargest = function (nums, k) {
    const len = nums.length;
    if (!len) return;
    // we are using insertion sort, as we know in insertion sort sorting always start from second elements
    for (let i = 1; i < len; i++) {
      const curEle = nums[i];
      let j = i - 1;
      while (j >= 0 && nums[j] > curEle) {
        nums[j + 1] = nums[j];
        j--;
      }
      nums[j + 1] = curEle;
    }
  
    return nums.at(-k);
  };
  
  const findKthLargestRes = findKthLargest([3, 2, 1, 5, 6, 4], 2);
  console.log("findKthLargestRes", findKthLargestRes);