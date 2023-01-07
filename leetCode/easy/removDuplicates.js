// var removeDuplicates = function (nums) {
//   let i = 1;
//   for (let j = 0; j < nums.length - 1; j++) {
//     if (nums[j] !== nums[j + 1]) {
//       nums[i] = nums[j + 1];
//       i++;
//     }
//   }
//   console.log("nums", nums);
//   return i;
// };

// var removeDuplicates = function (nums) {
//   let start = 0;
//   let end = nums.length - 1;
//   let ctr = 1;
//   while (end > start) {
//     if (nums[start] !== nums[start + 1]) {
//       nums[ctr] = nums[start + 1];
//       ctr++;
//     }
//     start++;
//   }

//   console.log("nums", nums);
//   return ctr;
// };

// const removeElementRes = removeDuplicates([1, 1, 2]);
// console.log("removeElementRes", removeElementRes);
