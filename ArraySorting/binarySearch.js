const sort = (nums, tar) => {
  let s = 0;
  let e = nums.length - 1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    if (nums[mid] === tar) {
      return mid;
    } else if (nums[mid] < tar) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }

  return false;
};

const sortResMy = sort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 13);
console.log("sortResMy", sortResMy);

// self understanding
// binary search
// const binary = (nums, target) => {
//   let start = 0;
//   let end = nums.length - 1;
//   while (start <= end) {
//     let mid = parseInt((start + end) / 2);
//     if (nums[mid] === target) return mid;
//     if (nums[mid] < target) {
//       start = mid + 1;
//     } else end = mid - 1;
//   }
//   return false;
// };

// const binaryRes = binary([1, 2, 3, 4, 5, 6, 7, 8, 9], 6);
// console.log("binaryRes", binaryRes);