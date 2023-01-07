// const lengthOfSubstring = (s) => {
//   let end = 0;
//   let start = 0;
//   let maxLength = 0;
//   if (!s) {
//     return 0;
//   }
//   const uniqueChar = new Set();
//   while (end < s.length) {
//     if (!uniqueChar.has(s[end])) {
//       uniqueChar.add(s[end]);
//       end++;
//       maxLength = Math.max(maxLength, uniqueChar.size);
//     } else {
//       uniqueChar.delete(s[start]);
//       start++;
//     }
//   }
//   return maxLength;
// };

// const res = lengthOfSubstring("abcabcbb");
// console.log("res", res);

const longestSubstring = (s) => {
  let set = new Set();
  let max = 0;
  let start = 0;
  let end = 0;

  while (start < s.length) {
    if (!set.has(s[start])) {
      set.add(s[start]);
      if (start - end + 1 > max) {
        max = start - end + 1;
      }
      start++;
    } else {
      set.delete(s[end]);
      end++;
    }
  }

  console.log("set", set);

  return max;
};

const longestSubstringRes = longestSubstring("pwwew");
console.log("longestSubstringRes", longestSubstringRes);
