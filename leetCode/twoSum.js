// const twoSum = (arr, target) => {
//   const len = arr.length;
//   for (let i = 0; i <= len; i++) {
//     for (let j = i + 1; i <= len; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };
// const twoSumRes = twoSum([2, 11, 7, 15], 9);
// console.log("twoSumRes", twoSumRes);

const twoSum = (arr, target) => {
  const len = arr.length;
  const map = new Set();
  for (let i = 0; i <= len; i++) {
    const value = arr[i];
    const complement = target - value;
    if (map[complement] !== undefined) {
      return [map[complement], i];
    } else map[value] = i;
  }
};
const twoSumRes = twoSum([2, 11, 7, 15], 9);
console.log("twoSumRes", twoSumRes);
