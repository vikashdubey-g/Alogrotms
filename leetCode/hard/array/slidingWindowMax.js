// const findMax = (nums) => {
//   const len = nums.length;
//   if (!len) return;
//   let max = nums[0];
//   for (const items of nums) {
//     max = Math.max(max, items);
//   }
//   return max;
// };
var maxSlidingWindow = function (nums, k) {
  const length = nums.length;
  if (!length) return;
  const res = [];
  const deque = [];

  for (let i = 0; i < k; i++) {
    while (deque.length !== 0 && deque.at(-1) < nums[i]) {
      deque.pop();
    }
    deque.push(nums[i]);
  }
  res.push(deque[0]);
  for (let i = k; i < length; i++) {
    if (deque[0] === nums[i - k]) {
      deque.shift();
    }
    while (deque.length !== 0 && deque.at(-1) < nums[i]) {
      deque.pop();
    }
    deque.push(nums[i]);
    res.push(deque[0]);
  }
  return res;
};

const maxSlidingWindowRes = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
console.log("maxSlidingWindowRes", maxSlidingWindowRes);
// console.log([1, 3, -1, -3, 5, 3, 6, 7].splice(1, 3));
