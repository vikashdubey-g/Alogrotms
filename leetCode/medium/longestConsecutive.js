var longestConsecutive = function (nums) {
    debugger
    if (!nums || nums.length === 0) return;
    const set = new Set(nums);
    let ans = 0;
    for (let item of set) {
      if (set.has(item - 1)) continue;
      let currEle = item;
      let currMax = 1;
      while (set.has(currEle + 1)) {
        currEle++;
        currMax++;
      }
      ans = Math.max(ans, currMax);
    }
    return ans;
  };
  
  const longestConsecutiveRes = longestConsecutive([100, 4, 200, 1, 3, 2]);
  console.log("longestConsecutiveRes", longestConsecutiveRes);
  