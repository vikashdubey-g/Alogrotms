// var searchRange = function (nums, target) {
//   const defaultRes = [-1, -1];
//   if (!nums || nums.length === 0 || !target) return defaultRes;
//   if (nums.length === 1 && nums.includes(target)) {
//     return [0, 0];
//   }
//   let start = 0;
//   let end = nums.length - 1;
//   let res = [];
//   const set = new Set();
//   for (const item of nums) {
//     if (item === target) {
//       if (set[item]) {
//         set[item]++;
//       } else set[item] = 1;
//     }
//   }
//   if (Object.keys(set).length === 0) return defaultRes;

//   while (start <= end) {
//     let mid = parseInt((start + end) / 2);
//     if (nums[mid] === target) {
//       while (set[nums[mid]] > 0) {
//         set[nums[mid]]--;
//         res.unshift(mid);
//       }
//     }
//     if (nums[mid] < target) {
//       start = mid + 1;
//     } else end = mid - 1;
//   }
//   return res;
// };

var searchRange = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let leftBound = -1;
    let rightBound = -1;
    while (left <= right) {
      let mid = parseInt((left + right) / 2);
      if (nums[mid] === target && nums[mid - 1] !== target) {
        leftBound = mid;
      }
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    left = 0;
    right = nums.length - 1;
    while (left <= right) {
      let mid = parseInt((left + right) / 2);
      if (nums[mid] === target && nums[mid + 1] !== target) {
        rightBound = mid;
      }
      if (nums[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return [leftBound, rightBound];
  };
  
  const searchRangeRes = searchRange([5, 7, 7, 8, 8, 10], 8);
  console.log("searchRangeRes", searchRangeRes);
  