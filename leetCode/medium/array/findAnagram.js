// brute force approach
const sortString = (s) => {
  return s.split("").sort().join("");
};

var findAnagrams = function (s, p) {
  if (!s || !p) return;
  const pLen = p.length;
  const res = [];
  for (let i = 0; i < s.length; i++) {
    const subStr = s.substring(i, pLen + i);
    const sortedSubStr = sortString(subStr);
    if (sortedSubStr === sortString(p)) {
      res.push(i);
    }
  }
  return res;
};

// Ihave to understand this problem
var findAnagrams = function(s, p) {
    let hashMap = new Map()
    for(let i = 0; i < p.length; i++) {
        if(hashMap.has(p[i])) {
            hashMap.set(p[i], hashMap.get(p[i]) + 1)
        } else {
            hashMap.set(p[i], 1)
        }
    }

    let res = []
    let start = 0, end = 0
    while(end < s.length) {
        if(hashMap.get(s[end]) > 0) {
            hashMap.set(s[end], hashMap.get(s[end]) - 1)
            end++
            if(end - start == p.length) {
                res.push(start)
            }
        } else if(start == end) {
            start++
            end++
        } else {
            hashMap.set(s[start], hashMap.get(s[start]) + 1)
            start++
        }
    }
    return res
};


const findAnagramsRes = findAnagrams("abab", "ab");
console.log("findAnagramsRes", findAnagramsRes);
