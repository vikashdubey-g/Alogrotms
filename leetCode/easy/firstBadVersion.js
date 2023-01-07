var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
      if (n === 1) return n;
      let start = 1;
      let end = n;
      let res = n;
      while (start <= end) {
        let mid = parseInt((start + end) / 2);
        if (isBadVersion(mid)) {
          if (res > mid) {
            res = mid;
          }
          end = mid - 1;
        } else start = mid + 1;
      }
      return res;
    };
  };
  
  const solutionRes = solution(5);
  console.log("solutionRes", solutionRes);
  