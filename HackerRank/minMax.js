const minMax = (arr) => {
  let minValue = arr[0];
  let maxValue = arr[0];
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
    totalSum += arr[i];
  }
  let minSum = totalSum - maxValue;
  let maxSum = totalSum - minValue;
  console.log(minSum, maxSum);
  return {minSum, maxSum};
};

const minMaxRes = minMax([1, 2, 3, 4, 5]);
console.log("minMaxRes", minMaxRes);
