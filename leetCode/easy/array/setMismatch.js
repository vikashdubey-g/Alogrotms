//Set Mismatch
// var findErrorNums = function (nums) {
//   const len = nums.length;
//   const set = new Map();
//   for (const items of nums) {
//     set[items] = set[items] + 1 || 1;
//   }
//   for (const key in set) {
//     if (set[key] > 1) return [+key,+key +1];
//   }
//   return false;
// };
var findErrorNums = function (nums) {
  const len = nums.length;
  if (!len) return;
  for (let i = 0; i < len; i++) {
    let currEle = nums[i];
    const position = currEle - 1; // storing the correct position of currEle
    // checking for only positive number which are in the range of [1,n]
    if (currEle > 0 && currEle <= len && nums[position] !== currEle) {
      [nums[position], nums[i]] = [nums[i], nums[position]]; // putting the currEles at their correct position
      i--; // restarting the loop
    }
  }

  console.log("nums", nums);

  // after moving the elements at original position, now checking actually they are or not
  for (let i = 0; i < len; i++) {
    const currEle = nums[i];
    if (i + 1 !== currEle) return [currEle, i + 1];
  }
  return -1;
};

const findErrorNumsRes = findErrorNums([2, 2]);
console.log("findErrorNumsRes", findErrorNumsRes);
