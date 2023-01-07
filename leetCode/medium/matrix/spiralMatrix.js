var spiralOrder = function (matrix) {
    let row = matrix.length;
    if (!row) return;
    let col = matrix[0].length;
    const res = [];
    let l = 0,
      r = col - 1,
      t = 0,
      b = row - 1,
      d = 0;
    while (l <= r && t <= b) {
      if (d === 0) {
        for (let i = l; i <= r; i++) {
          res.push(matrix[t][i]);
        }
        d = 1;
        t++;
      } else if (d === 1) {
        for (let i = t; i <= b; i++) {
          res.push(matrix[i][r]);
        }
        d = 2;
        r--;
      } else if (d === 2) {
        for (let i = r; i >= l; i--) {
          res.push(matrix[b][i]);
        }
        d = 3;
        b--;
      } else if (d === 3) {
        for (let i = b; i >= t; i--) {
          res.push(matrix[i][l]);
        }
        d = 0;
        l++;
      }
    }
    return res;
  };
  
  const spiralOrderRes = spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  console.log("spiralOrderRes", spiralOrderRes);