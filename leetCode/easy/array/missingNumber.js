var missingNumber = function (nums) {
    const len = nums.length;
    if (!len) return;
    const set = new Set();
    for (let i = 0; i <= len; i++) {
        set.add(i);
    }
    for (const items of nums) {
        if (set.has(items)) set.delete(items);
    }
    const [missingNum] = set;
    return missingNum;
};

var missingNumber = function (nums) {
  const len = nums.length;
  if (!len) return;
  nums.sort((a, b) => a - b);

  for (let i = 0; i <= len; i++) {
    const currEle = nums[i];
    if (i !== currEle) return i;
  }
};

const missingNumberRes = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
console.log("missingNumberRes", missingNumberRes);
