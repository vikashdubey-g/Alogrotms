const trailingZeroes = (n) => {
    let res = 0;
    while (n > 4) {
      n = parseInt(n / 5);
      res = res + n;
    }
  
    return res;
  };
  
  const trailingZeroesRes = trailingZeroes(30);
  console.log("trailingZeroesRes", trailingZeroesRes);