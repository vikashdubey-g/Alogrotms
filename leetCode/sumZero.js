// const sumZero = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// const sumZeroRes = sumZero([-5, -4, -3, -2, 0, 4, 6, 8], 0);
// console.log("sumZeroRes", sumZeroRes);

const sumZero = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
      let sum = nums[start] + nums[end];
      if (sum === target) {
        return [start, end];
      }
      if (sum > target) {
        end--;
      }
      if (sum < target) {
        start++;
      }
    }
  };
  
  const sumZeroRes = sumZero([-5, -4, -3, -2, 0, 4, 6, 8], 0);
  console.log("sumZeroRes", sumZeroRes);
  