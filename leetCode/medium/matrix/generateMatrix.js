var generateMatrix = function (n) {
    if (!n) return;
    let l = 0,
      r = n - 1,
      t = 0,
      b = n - 1,
      d = 0;
    const res = [];
    let num = 1;
    for (var i = 0; i < n; i++) {
      res[i] = [];
    }
    while (l <= r && t <= b) {
      if (d === 0) {
        for (let i = l; i <= r; i++) {
          res[t][i] = num;
          num++;
        }
        d = 1;
        t++;
      } else if (d === 1) {
        for (let i = t; i <= b; i++) {
          res[i][r] = num;
          num++;
        }
        d = 2;
        r--;
      } else if (d === 2) {
        for (let i = r; i >= l; i--) {
          res[b][i] = num;
          num++;
        }
        d = 3;
        b--;
      } else if (d === 3) {
        for (let i = b; i >= t; i--) {
          res[i][l] = num;
          num++;
        }
        d = 0;
        l++;
      }
    }
    return res;
  };
  
  const generateMatrixRes = generateMatrix(3);
  console.log("generateMatrixRes", generateMatrixRes);
  