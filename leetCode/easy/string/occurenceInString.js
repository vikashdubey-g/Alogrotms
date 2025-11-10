var strStr = function (haystack, needle) {
  if (!haystack || !needle) return -1;
  const len = haystack.length - needle.length + 1;

  for (i = 0; i < len; i++) {
    if (haystack.charAt(i) === needle.charAt(0)) {
        console.log("first",i, needle.length ,haystack.substring(i, needle.length))
      if (haystack.substring(i, needle.length) === needle) {
        return i;
      }
    }
  }

  return -1;
};

const strStrRes = strStr("hello", "ll");
console.log("strStrRes", strStrRes);
