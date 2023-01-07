// First Missing Positive
// approach:- first we will store the correct position of element and then put them at their original position
var findErrorNums = function (nums) {
    const len = nums.length;
    if (!len) return;
    let dup = -1,
      mis = -1;
    for (let i = 1; i <= len; i++) {
      let count = 0;
      for (let j = 0; j <=len; j++) {
        if (nums[j] === i) count++;
      }
      if (count === 2) {
        dup = i;
      } else if (count === 0) mis = i;
    }
  
    return [dup, mis];
  };
  
var firstMissingPositive = function (nums) {
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
  
    // after moving the elements at original position, now checking actually they are or not
    for (let i = 0; i < len; i++) {
      const currEle = nums[i];
      if (i + 1 !== currEle) return i + 1;
    }
    return len + 1;
  };
  
  var firstMissingPositive = function (nums) {
    let i = 0;
    const len = nums.length;
    if (!len) return;
    while (i < len) {
      let currEle = nums[i];
      const position = currEle - 1; // storing the correct position of currEle
      // checking for only positive number which are in the range of [1,n]
      if (currEle > 0 && currEle <= len && nums[position] !== currEle) {
        [nums[position], nums[i]] = [nums[i], nums[position]];
      } else {
        i++;
      }
    }
  
    // after moving the elements at original position, now checking actually they are or not
    for (let i = 0; i < len; i++) {
      const currEle = nums[i];
      if (i + 1 !== currEle) return i + 1;
    }
    return i + 1;
  };
  
  const firstMissingPositiveRes = firstMissingPositive([3, 4, -1, 1]);
  console.log("firstMissingPositiveRes", firstMissingPositiveRes);
  

  