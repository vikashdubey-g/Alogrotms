var detectCapitalUse = function (word) {
    if (!word) return false;
    const len = word.length;
    let isMatchingOnlyCapitalLtr = true;
    let isMatchingOnlySmallLtr = true;
    let isOnlyFirstCapital = true;
    // checking for only all capitals letters
    for (let i = 0; i < len; i++) {
      const currEle = word[i];
      if (currEle !== currEle.toUpperCase()) {
        isMatchingOnlyCapitalLtr = false;
        break;
      }
    }
  
    if (isMatchingOnlyCapitalLtr) return true;
    // checking for only all small letters
    for (let i = 0; i < len; i++) {
      const currEle = word[i];
      if (currEle !== currEle.toLowerCase()) {
        isMatchingOnlySmallLtr = false;
        break;
      }
    }
    if (isMatchingOnlySmallLtr) return true;
    // checking for first character capital letters and other are small
    if (word.charAt(0) !== word.charAt(0).toUpperCase()) return false;
    for (let i = 1; i < len; i++) {
      const currEle = word[i];
      if (currEle !== currEle.toLowerCase()) {
        isOnlyFirstCapital = false;
        break;
      }
    }
    if (isOnlyFirstCapital) return true;
  
    // If not matching any of the conditioins
    return false;
  };
  
  const detectCapitalUseRes = detectCapitalUse("ggg");
  console.log("detectCapitalUseRes", detectCapitalUseRes);