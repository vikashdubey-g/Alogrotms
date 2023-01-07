// var sortColors = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] > nums[j]) {
//         [nums[i], nums[j]] = [nums[j], nums[i]];
//       }
//     }
//   }
//   return nums;
// };

var sortColors = function (nums) {
    let len = nums.length - 1;
      for (i = 1; i <= len; i++) {
        let cur = nums[i];
        let j = i - 1;
    
        while (j >= 0 && nums[j] > cur) {
          nums[j + 1] = nums[j];
          j--;
        }
        nums[j + 1] = cur;
      }
      return nums;
  };
  
  const sortColorsRes = sortColors([2, 0, 2, 1, 1, 0]);
  console.log("sortColorsRes", sortColorsRes);