const reverseArr = (arr, start, end) => {
  let i = start;
  let j = end;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr;
};

var rotate = function (nums, k) {
  const len = nums.length;
  if (!len) return;
  k %= len; // taking the modules beacuase if k will greater than length then we have to rotate only remaining element

  reverseArr(nums, 0, len - 1); // first reversing the entire array
  reverseArr(nums, 0, k - 1); // second reversing the array from starting to k size
  reverseArr(nums, k, len - 1); // third reversing the array after the k
  return nums;
};

const rotateRes = rotate([1, 2, 3, 4, 5, 6, 7], 3);
console.log("rotateRes", rotateRes);
// [1, 2, 3, 4, 5, 6, 7];
// [5, 6, 7, 1, 2, 3, 4];

// using built in function
// var rotate = function (nums, k) {
//   const len = nums.length;
//   if (!len) return;
//   const removeElement = nums.splice(-k); // removing the k element from the last
//   return removeElement.concat(nums);
// };

// using extra space
// var rotate = function (nums, k) {
//   const len = nums.length;
//   if (!len) return;
//   const res = [];
//   for (let i = 0; i < len - k; i++) {
//     const element = nums[i];
//     res.push(element);
//   }
//   for (let i = len - 1; i > k; i--) {
//     const element = nums[i];
//     res.unshift(element);
//   }

//   return res;
// };
