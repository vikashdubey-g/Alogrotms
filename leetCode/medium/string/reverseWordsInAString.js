var reverseWords = function (s) {
    const nums = s
      .trim()
      .split(" ")
      .filter((ele) => ele !== "");
    console.log("nums", nums);
    const len = nums.length - 1;
    for (let i = 0; i <= len / 2; i++) {
      if (nums[i] !== "") {
        [nums[i], nums[len - i]] = [nums[len - i], nums[i]];
      }
    }
    return nums.join(" ");
  };

  var reverseWords = function (s) {
    if (!s) return;
    const nums = s.trim().split(" ").filter(Boolean); // removing the white space from starting and ending 
    const len = nums.length - 1;
    for (let i = 0; i <= len / 2; i++) {
      [nums[i], nums[len - i]] = [nums[len - i], nums[i]];
    }
    return nums.join(" ");
  };
  

  var reverseWords = function (s) {
    if (!s) return;
    const nums = s.split(" ");
    const len = nums.length - 1;
    let reverseStr = "";
    for (let i = len; i >= 0; i--) {
      if (!nums[i]) continue; // skipping the loop when "" comes
      if (reverseStr.length > 0) reverseStr += " "; // adding the space between two characters
      reverseStr += nums[i];
    }
    return reverseStr;
  };
  
  const reverseWordsRes = reverseWords("a good   example");
  console.log("reverseWordsRes", reverseWordsRes);