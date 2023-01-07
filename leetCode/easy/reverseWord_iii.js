var reverseString = function (s) {
  const len = s.length - 1;
  let str = "";
  for (let i = len; i >= 0; i--) {
    str += s[i];
  }
  return str;
};

var reverseWords = function (s) {
  const str = s.split(" ");

  for (let i = 0; i < str.length; i++) {
    const curEle = str[i];
    res = reverseString(curEle);
    str[i] = res;
  }
  return str.join(" ");
};

// var reverseWords = function (s) {
//   const nums = s
//     .trim()
//     .split(" ")
//     .filter((ele) => ele !== "");
//   console.log("nums", nums);
//   const len = nums.length - 1;
//   for (let i = 0; i <= len / 2; i++) {
//     if (nums[i] !== "") {
//       [nums[i], nums[len - i]] = [nums[len - i], nums[i]];
//     }
//   }
//   return nums.join(" ");
// };

const reverseWordsRes = reverseWords("Let's take LeetCode contest");
console.log("reverseWordsRes", reverseWordsRes);
