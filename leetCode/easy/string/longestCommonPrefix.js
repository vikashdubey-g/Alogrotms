const findMinLength = (inparr) => {
  let minLength = inparr[0].length;

  for (const item of inparr) {
    if (item.length < minLength) {
      minLength = item.length;
    }
  }
  return minLength;
};

const longestCommonPrefix = (arr) => {
  const len = findMinLength(arr);

  let result = "";
  let current;
  for (let i = 0; i <= len; i++) {
    current = arr[0][i];
    console.log("current", current);
    for (let j = 1; j < arr.length; j++) {
      if (arr[j][i] !== current) {
        return result;
      }
    }
    result += current;
  }

  return result;
};

const longestCommonPrefixRes = longestCommonPrefix([
  "flower",
  "flow",
  "flight",
]);
console.log("longestCommonPrefixRes", longestCommonPrefixRes);

var longestCommonPrefix1 = function (strs) {
  const len = strs.length;
  if (!len) return "";
  let res = "";
  let minLen = strs[0].length;
  let currElement;
  // finding minimum length of element
  for (const items of strs) {
    minLen = Math.min(minLen, items.length);
  }

    // Second scan: find common chars until a different one
    for (let i = 0; i < minLength; i++) {
        for (const str of strs) {
          if (str[i] !== strs[0][i]) {
            return str.substr(0, i);
          }
        }
      }
      return strs[0].substr(0, minLength);

//   for (let i = 0; i < minLen; i++) {
//     currElement = strs[0][i]; // first string of first element
//     for (let j = 1; j < strs.length; j++) {
//       if (strs[j][i] !== currElement) return res; // comparing the string stored in currElement with the second element's string
//     }
//     res += currElement;
//   }

  return res;
};
