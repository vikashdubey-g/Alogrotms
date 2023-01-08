var largestNumber = function (nums) {
  const sorted = nums.sort((a, b) => {
    const ab = a.toString() + b.toString();
    const ba = b.toString() + a.toString();
    return ba - ab;
  });
  const joined = sorted.join("");
  if (parseInt(joined) === 0) {
    return "0";
  } else return joined;
};

const largestNumberRes = largestNumber([3, 30, 34, 5, 9]);
// console.log("largestNumberRes", largestNumberRes);

var findAnagrams = function (s, p) {
  let hashMap = new Map();
  for (let i = 0; i < p.length; i++) {
    if (hashMap.has(p[i])) {
      hashMap.set(p[i], hashMap.get(p[i]) + 1);
    } else {
      hashMap.set(p[i], 1);
    }
  }

  let res = [];
  let start = 0,
    end = 0;
  while (end < s.length) {
    if (hashMap.get(s[end]) > 0) {
      hashMap.set(s[end], hashMap.get(s[end]) - 1);
      end++;
      if (end - start == p.length) {
        res.push(start);
      }
    } else if (start == end) {
      start++;
      end++;
    } else {
      hashMap.set(s[start], hashMap.get(s[start]) + 1);
      start++;
    }
  }
  return res;
};

const findAnagramsRes = findAnagrams("abab", "ab");
// console.log("findAnagramsRes", findAnagramsRes);
