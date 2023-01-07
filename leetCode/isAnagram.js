var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let counter = new Map();
  for (let item of s) {
    if (counter[item]) {
      counter[item]++;
    } else counter[item] = 1;
  }

  for (let i = 0; i < t.length; i++) {
    let curEle = t[i];
    if (!counter[curEle]) {
      return false;
    }
    counter[curEle]--;
  }

  return true;
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false; // first checking the length of the two string should be equal
  const map = new Map();
  for (const items of s) {
    // storing the frequency of letters of first string
    map[items] = map[items] + 1 || 1;
  }
  for (const items of t) {
    if (!map[items]) return false; // now checking the second string characters exist into stored or not i
    map[items]--;
  }
  return true;
};

const validAnagram = (s, t) => {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

const isAnagramRes = isAnagram("aacc", "ccac");
console.log("isAnagramRes", isAnagramRes);

// var isAnagram = function(s, t) {
//     return s.split('').sort().join('') === t.split('').sort().join('');
// };
