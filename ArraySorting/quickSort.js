const quickSort = (nums) => {
  if (!nums || nums.length < 2) return nums;
  const pivot = nums.at(-1);
  let left = [];
  let right = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else right.push(nums[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

const quickSortRes = quickSort([2,0,2,1,1,0]);
console.log("quickSortRes", quickSortRes);

