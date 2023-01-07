var reverse = function (x) {
    const isNegaive = x < 0 ? true : false;
  
    let cloneX = Math.abs(x);
    let res = 0;
    while (cloneX > 0) {
      let digit = cloneX % 10;
      res = res * 10 + digit;
      cloneX = parseInt(cloneX / 10);
    }
    return isNegaive ? -res : res;
  };
  const reverseRes = reverse(-123);
  console.log("reverseRes", reverseRes);