const diganolDifference = (arr) => {
  const len = arr[0].length;
  let leftDiganolSum = 0;
  let rightDiganolSum = 0;
  for (let i = 0, j = len - 1; i < len; i++, j--) {
    leftDiganolSum += arr[i][i];
    rightDiganolSum += arr[i][j];
  }
  let differnce = leftDiganolSum - rightDiganolSum;
  return Math.abs(differnce);
};

const diganolDifferenceRes = diganolDifference([
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
]);
console.log("diganolDifferenceRes", diganolDifferenceRes);
