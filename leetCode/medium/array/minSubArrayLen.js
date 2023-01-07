var minSubArrayLen = function (target, nums) {
    const len = nums.length;
    if (!target || !len) return;
    let ans = Number.MAX_VALUE;
    let left = 0;
    let sum = 0;
    for (let i = 0; i < len; i++) {
      sum += nums[i];
      while (sum >= target) {
        const subarrayLen = i + 1 - left;// storing the subarray length
        ans = Math.min(ans, subarrayLen);
        sum -= nums[left++];
      }
    }
    return ans != Number.MAX_VALUE ? ans : 0;
  };
  
  var minSubArrayLen = function (target, nums) {
    const len = nums.length;
    if (!target || !len) return;
    let ans = Number.MAX_VALUE;
    for (let i = 0; i < len; i++) {
      for (let j = 1; j < len; j++) {
        let sum = 0;
        for (let k = i; k <= j; k++) {
          sum += nums[k];
        }
        if (sum >= target) {
          ans = Math.min(j - i + 1, ans);
          break;
        } // finding the minimum subarray length
      }
    }
    return ans != Number.MAX_VALUE ? ans : 0;
  };
  
  const minSubArrayLenRes = minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]);
  console.log("minSubArrayLenRes", minSubArrayLenRes);
  