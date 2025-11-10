var singleNumber = function (nums) {
  if (!nums.length) return;
  const map = new Map();
  for (const items of nums) {
    map[items] = map[items] + 1 || 1;
  }
  for (const key in map) {
    if (map[key] === 1) return key;
  }
};

const singleNumberRes = singleNumber([2, 2, 1]);
console.log("singleNumberRes", singleNumberRes);
