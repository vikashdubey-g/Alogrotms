// var findDuplicate = function (nums) {
//   const len = nums.length;
//   if (!len) return;
//   const set = new Set();
//   for (const items of nums) {
//     set[items] = set[items] + 1 || 1;
//     if (set[items] > 1) return items;
//   }

//   return -1;
// };

// var findDuplicate = function (nums) {
//   const len = nums.length;
//   if (!len) return;
//   const set = new Set();
//   for (const items of nums) {
//     set[items] = set[items] + 1 || 1;
//   }
//   for (const key in set) {
//     if (set[key] > 1) return key;
//   }
//   return -1;
// };

// var findDuplicate = function (nums) {
//   const len = nums.length;
//   if (!len) return;
//   nums.sort((a, b) => a - b);
//   for (let i = 1; i < len; i++) {
//     if (nums[i] === nums[i - 1]) return nums[i];
//   }
//   return -1;
// };

// var findDuplicate = function (nums) {
//   const len = nums.length;
//   if (!len) return;
//   const set = new Set();
//   for (const items of nums) {
//     if (set.has(items)) return items;
//     set.add(items);
//   }
//   return -1;
// };

var findDuplicate = function (nums) {
    const len = nums.length;
    if (!len) return;
   for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if(element < 0) return element
    
    
   }
    return -1;
  };

const findDuplicateRes = findDuplicate([1, 3, 4, 2, 2]);
console.log("findDuplicateRes", findDuplicateRes);
