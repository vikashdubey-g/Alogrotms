const rverseString = (s) => {
    const len = s.length - 1;
    let string = "";
    for (let i = len; i >= 0; i--) {
      string += s[i];
    }
    return string;
  };
  
  const reverseWords = (s) => {
    const len = s.length;
    if (!len) return;
    const res = [];
    let str = "";
    for (let i = len - 1; i >= 0; i--) {
      const element = s[i];
      if (element !== " ") str += element;
      if (element === " ") {
        const reverseStringResult = rverseString(str);
        res.push(reverseStringResult.split(""));
        res.push(" ")
        str = "";
      }
      // res.push(element);
    }
    return res.flat(Infinity);
  };
  
  const reverseWordsRes = reverseWords([
    "t",
    "h",
    "e",
    " ",
    "s",
    "k",
    "y",
    " ",
    "i",
    "s",
    " ",
    "b",
    "l",
    "u",
    "e",
  ]);
  console.log("reverseWordsRes", reverseWordsRes);
  