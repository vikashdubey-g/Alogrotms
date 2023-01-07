const reverseStr = (s) => {
    const len = s.length - 1;
    let reverse = "";
    for (let i = len; i >= 0; i--) {
      reverse += s[i];
    }
    return reverse;
  };
  
  const reverseWords = (s) => {
    if (!s) return;
    const nums = s.split(" ");
    const len = nums.length - 1;
    res = "";
    for (let i = 0; i <= len; i++) {
      let reverseStringResult = reverseStr(nums[i]); // calling the reverseString function
      if (res.length > 0) res += " "; // addding the space between the words
      res += reverseStringResult;
    }
    return res;
  };
  
  const reverseWordsRes = reverseWords("Let's take LeetCode contest");
  console.log("reverseWordsRes", reverseWordsRes);
  console.log("first", reverseStr("God"));
  