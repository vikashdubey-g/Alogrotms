var arrayPairSum = function (s) {
    const len = s.length;
    if (!len) return;
    s.sort((a, b) => a - b);
    let max = 0;
    for (let i = 0; i < len; i += 2) {
      console.log('s[i]', s[i])
      max += s[i];
    }
    return max;
  };
  const arrayPairSumRes = arrayPairSum([1, 4, 3, 2]);
  console.log("arrayPairSumRes", arrayPairSumRes);
