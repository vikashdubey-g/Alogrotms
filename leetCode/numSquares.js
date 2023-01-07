var numSquares = function (n) {
    const res = [];
    function countWays(n) {
      if (n === 0) return 0;
      if (res[n] > 0) return res[n];
      let min = n;
      for (let i = 1; i * i <= n; i++) {
        min = Math.min(countWays(n - i * i), min);
      }
      res[n] = min + 1;
      return min + 1;
    }
  
    return countWays(n);
  };
  
  const numSquaresRes = numSquares(12);
  console.log("numSquaresRes", numSquaresRes);