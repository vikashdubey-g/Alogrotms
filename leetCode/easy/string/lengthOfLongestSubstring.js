var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  const set = new Set();
  let start = 0;
  let end = 0;
  let max = 0;
  while (start < s.length) {
    if (!set.has(s[start])) {
      set.add(s[start]);
      strLen = start - end + 1;
      max = Math.max(strLen, max);
      start++;
    } else {
      set.delete(s[end]);
      end++;
    }
  }
  return max;
};

const lengthOfLongestSubstringRes = lengthOfLongestSubstring("abcabcbb");
console.log("lengthOfLongestSubstringRes", lengthOfLongestSubstringRes);
