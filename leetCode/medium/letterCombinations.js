const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  // Input: digits = "23"
  // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
  // var letterCombinations = function (digits) {
  //   debugger
  //   const res = [""];
  //   if (!digits || 0 >= digits.length >= 4) return res;
  //   if (digits.length === 1) return map[digits].split("");
  //   for (const digit of digits) {
  //     const len = res.length;
  //     for (let i = 0; i < len; i++) {
  //       const curr = res.shift();
  //       map[digit].split("").forEach((i) => res.push(curr + i));
  //     }
  //   }
  //   return res;
  // };
  
  var letterCombinations = function (digits) {
    debugger
    const res = [];
    if (!digits || 0 >= digits.length >= 4) return res;
    if (digits.length === 1) return map[digits].split("");
    const backTrack = (current, i) => {
      if (i > digits.length - 1) {
        res.push(current);
        return;
      }
      const letters = map[digits[i]];
      for (const l of letters) {
        backTrack(current + l, i + 1);
      }
    };
    backTrack("", 0);
    return res;
  };
  
  const letterCombinationsRes = letterCombinations("23");
  console.log("letterCombinationsRes", letterCombinationsRes);
  