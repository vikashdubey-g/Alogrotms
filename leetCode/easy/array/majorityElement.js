var majorityElement = function (nums) {
  const len = nums.length;
  if (!len) return;
  const res = []
  const matchCount = parseInt(len / 3);
  const map = new Map();
  for (const items of nums) {
    map[items] = map[items] + 1 || 1;
  }

  for (const key in map) {
    if (map[key] > matchCount) return key;
  }
};

const majorityElementRes = majorityElement([3,2,3]);
console.log("majorityElementRes", majorityElementRes);
