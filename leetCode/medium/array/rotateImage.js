var rotate = function (matrix) {
  const len = matrix.length;
  if (!len) return;
  // first transpose the matrix
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  // reversing the colums value
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len / 2; j++) {
      [matrix[i][j], matrix[i][len - j - 1]] = [
        matrix[i][len - j - 1],
        matrix[i][j],
      ];
    }
  }
  return matrix;
};
const rotateRes = rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log("rotateRes", rotateRes);
