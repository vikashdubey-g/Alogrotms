var strStr = function (haystack, needle) {
  if (!haystack || !needle) return -1;
  return haystack.search(needle);
};

var strStr = function (haystack, needle) {
  if (!haystack || !needle) return -1;
  const needleLength = needle.length;
  let matchingNeedle = "";
  for (let i = 0; i < haystack.length; i++) {
    matchingNeedle = haystack.slice(i, needleLength + i);
    if (matchingNeedle.length === needleLength && matchingNeedle === needle)
      return i;
  }

  return -1;
};

var strStr = function (haystack, needle) {
  if (!haystack || !needle) return -1;
  const needleLen = needle.length;
  for (let i = 0; i < haystack.length; i++) {
    let k = i,
      j = 0;
    while (haystack[k] === needle[j] && j < needleLen) {
      k++;
      j++;
    }
    if (j === needleLen) return i;
  }

  return -1;
};

const strStrRes = strStr("sadbutsad", "sadq");
console.log("strStrRes", strStrRes);
