var reverseString = (nums) => {
  if (!nums.length) return [];
  const len = nums.length - 1;
  for (let i = 0; i <= parseInt(len / 2); i++) {
    [nums[i], nums[len - i]] = [nums[len - i], nums[i]];
  }
  return nums;
};
var reverseString = (nums) => {
  if (!nums.length) return [];
  let s = 0;
  let end = nums.length - 1;
  while (s <= end) {
    [nums[s], nums[end]] = [nums[end], nums[s]];
    s++;
    end--;
  }
  return nums;
};

const reverseStringRes = reverseString(["h", "e", "l", "l", "o"]);
console.log("reverseStringRes", reverseStringRes);
