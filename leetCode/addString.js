var addStrings = function (num1, num2) {
    debugger
    let res = "";
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    while (i >= 0 || j >= 0 || carry !== 0) {
      let num1Val = i >= 0 ? num1.charAt(i) - 0 : 0;
      let num2Val = j >= 0 ? num2.charAt(j) - 0 : 0;
      i--;
      j--;
      let sum = num1Val + num2Val + carry;
      res = (sum % 10) + res;
      carry = parseInt(sum / 10);
    }
    return res;
  };
  
  const addStringsRes = addStrings("123", "11");
  console.log("addStringsRes", addStringsRes ,);