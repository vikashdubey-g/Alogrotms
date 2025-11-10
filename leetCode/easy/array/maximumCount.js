function lowerNum(nums) {
  let count = 0;
  for (const items of nums) {
    if (items <= 0) {
      count++;
    }
  }
  return count;
}

function upperNum(nums) {
  let count = 0;
  for (const items of nums) {
    if (items > 0) {
      count++;
    }
  }
  return count;
}

var maximumCount = function (nums) {
  return Math.max(lowerNum(nums), upperNum(nums));
};

const maximumCountRes = maximumCount([-2, -1, -1, 1, 2, 3]);
console.log("maximumCountRes", maximumCountRes);
