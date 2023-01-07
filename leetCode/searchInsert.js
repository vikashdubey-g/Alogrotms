// var searchInsert = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       return i;
//     } else {
//       nums.push(target);
//       for (let i = 0; i < nums.length; i++) {
//         if (nums[i] < target && nums[i + 1] > target) {
//           return i + 1;
//         }
//       }
//     }
//   }
// };

var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let mid = parseInt(left + (right - left) / 2);
      if (nums[mid] === target) return mid;
      if (nums[mid] < target) left = mid + 1;
      if (nums[mid] > target) right = mid - 1;
    }
    return left;
  };
  
  const searchInsertRes = searchInsert([1, 3, 5, 6], 7);
  console.log("searchInsertRes", searchInsertRes);
  