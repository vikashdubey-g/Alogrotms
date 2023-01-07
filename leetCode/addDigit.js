var addDigits = function (num) {
    while (num > 9) {
      let res = 0;
      while (num > 0) {
        res += num % 10;
        num = parseInt(num / 10);
      }
      num = res;
    }
  
    return num;
  };
  
  const addDigitsRes = addDigits(38);
  console.log("addDigitsRes", addDigitsRes);