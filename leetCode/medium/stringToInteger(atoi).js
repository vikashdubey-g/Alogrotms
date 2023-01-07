function containsNumbers(str) {
    return /\d/.test(str);
  }
  
  var myAtoi = function (s) {
    debugger;
    s = s.trim();
    let res = 0;
    const INT_MIN = -1 * Math.pow(2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;
    let start = 0;
    let sign = 1;
    if ((s[0] === "+" && s[1] === "-") || (s[0] === "-" && s[1] === "+"))
      return 0;
    if (s[start] === "+") {
      start++;
    }
  
    if (s[start] === "-") {
      sign = -1;
      start++;
    }
    while (s[start]) {
      if (s[start] == " " || !containsNumbers(s[start])) break;
      if (!(s[start] - "0" >= 0 && s[start] - "0" <= 9)) return 0;
      res = res * 10 + (s[start] - "0");
      if (res * sign <= INT_MIN) return INT_MIN;
      if (res * sign >= INT_MAX) return INT_MAX;
      start++;
    }
    return res * sign;
  };
  
  const myAtoiRes = myAtoi("+-12");
  console.log("myAtoiRes", myAtoiRes);
  