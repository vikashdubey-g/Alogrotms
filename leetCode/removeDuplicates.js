const removeDuplicates = (nums) => {
  let ctr = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[ctr] = nums[i + 1];
      ctr++;
    }
  }

  return ctr;
};

const removeDuplicatesRes = removeDuplicates([1, 1, 1, 2, 3, 3, 4]);
console.log("removeDuplicatesRes", removeDuplicatesRes);
