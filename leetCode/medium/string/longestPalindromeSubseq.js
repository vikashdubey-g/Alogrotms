var longestPalindromeSubseq = function (s) {
  if (!s) return;
  const map = new Map();
  for (const items of s) {
    map[items] = map[items] + 1 || 1;
  }
  console.log("map", Math.max(...Object.values(map)));
};

const longestPalindromeSubseqRes = longestPalindromeSubseq("aabaa");
console.log("longestPalindromeSubseqRes", longestPalindromeSubseqRes);
