var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;
    let sSet = new Set();
    let tSet = new Set();
  
    for (let i = 0; i < s.length; i++) {
      if (!sSet[s[i]] && !tSet[t[i]]) {
        sSet[s[i]] = t[i];
        tSet[t[i]] = s[i];
      } else if (sSet[s[i]] !== t[i]) {
        return false;
      }
    }
  
    return true;
  };
  
  const isIsomorphicRes = isIsomorphic("foo", "bar");
  console.log("isIsomorphicRes", isIsomorphicRes);
  