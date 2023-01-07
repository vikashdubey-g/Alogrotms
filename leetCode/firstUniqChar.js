var firstUniqChar = function (s) {
    const set = new Set();
    for (const item of s) {
      set[item] ? set[item]++ : (set[item] = 1);
    }
    for (let i = 0; i <= s.length; i++) {
      if (set[s[i]] === 1) {
        return i;
      }
    }
  
    return -1;
  };
  
  // var firstUniqChar = function (s) {
  //   const set = new Set();
  //   let start = 0;
  //   let end = s.length;
  //   while (start < end) {
  //     if (set[s[start]]) {
  //       set[s[start]]++;
  //     } else {
  //       set[s[start]] = 1;
  //     }
  //     start++;
  //   }
  
  //   for (let i = 0; i <= s.length; i++) {
  //     if (set[s[i]] === 1) {
  //       return i;
  //     }
  //   }
  
  //   return -1;
  // };
  
  const firstUniqCharRes = firstUniqChar("loveleetcode");
  console.log("firstUniqCharRes", firstUniqCharRes);
  