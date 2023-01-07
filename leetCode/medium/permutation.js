// var permute = function (nums) {
//   if (!nums || nums.length === 0) return;
//   if (nums.length === 1) return [nums];
//   if (nums.length === 2)
//     return [
//       [nums[0], nums[1]],
//       [nums[1], nums[0]],
//     ];
//   return nums.flatMap((n) => {
//     return permute(nums.filter((i) => i !== n)).map((i) => [n, ...i]);
//   });
// };

// var permute = function (nums) {
//   const res = [];
//   const perm = (arr, start, end) => {
//     if (start === end) {
//       res.push([...arr]);
//       return;
//     }
//     for (let i = start; i <= end; i++) {
//       [arr[i], arr[start]] = [arr[start], arr[i]];
//       perm(arr, start + 1, end);
//       [arr[i], arr[start]] = [arr[start], arr[i]];
//     }
//   };
//   perm(nums, 0, nums.length - 1);
//   return res;
// };

// var permute = function (nums) {
//   debugger
//   const res = [];
//   const perm = (arr) => {
//     if (arr.length === nums.length) {
//       res.push([...arr]);
//       return;
//     }
//     for (let i = 0; i < nums.length; i++) {
//       if (arr.includes(nums[i])) continue;
//       arr.push(nums[i]);
//       perm(arr);
//       arr.pop(nums[i]);
//     }
//   };
//   perm([]);
//   return res;
// };

var permute = function (nums) {
    // result
    const res = [];
    const rec = (i, nums) => {
      if (i === nums.length) {
        res.push(nums.slice());
        return;
      }
      for (let j = i; j < nums.length; j++) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        rec(i + 1, nums);
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    };
    rec(0, nums);
    return res;
  };
  const permuteRes = permute([1, 2, 3]);
  
  console.log("permuteRes", permuteRes);
  