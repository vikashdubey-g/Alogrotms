const aVeryBigSum = (ar) => {
  let res = 0;
  for (const item of ar) {
    res += item;
  }
  return res;
};

const aVeryBigSumRes = aVeryBigSum([
  1000000001, 1000000002, 1000000003, 1000000004, 1000000005,
]);
console.log("aVeryBigSumRes", aVeryBigSumRes);
