var wordPattern = function (pattern, s) {
    let newS = s.split(" ");
    let sSet = new Set();
    let tSet = new Set();
  
    for (let i = 0; i < s.length; i++) {
      if (!sSet[pattern[i]] && !tSet[newS[i]]) {
        sSet[pattern[i]] = newS[i];
        tSet[newS[i]] = pattern[i];
      } else if (sSet[pattern[i]] !== newS[i]) {
        return false;
      }
    }
  
    return true;
  };
  
  const wordPatternRes = wordPattern("abba", "dog cat cat dog");
  console.log("wordPatternRes", wordPatternRes);
  