var diagonalSum = function (mat) {
    const len = mat.length;
    if (!len) return;
    const eleLen = mat[0].length;
    let leftDSum = 0;
    let rightDSum = 0;
    let mid = 0;
    for (let i = 0, j = eleLen - 1; i < eleLen; i++, j--) {
      leftDSum += mat[i][i];
      rightDSum += mat[i][j];
      if (i === j) mid = mat[i][j];
      // if (i === j) mid = mat[i][i];
    }
    const res = leftDSum + rightDSum - mid;
    return res;
  };
  
  const diagonalSumRes = diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ]);
  console.log("diagonalSumRes", diagonalSumRes);
  