var generate = function (numRows) {
  if (!numRows) return;
  const res = [];
  for (let i = 0; i < numRows; i++) {
    const rows = new Array(i + 1);
    rows[0] = 1;
    rows[rows.length - 1] = 1;
    for (let j = 1; j < rows.length - 1; j++) {
      let prevRows = res[i - 1];
      rows[j] = prevRows[j - 1] + prevRows[j];
    }
    res[i] = rows;
  }
  return res;
};

const generateRes = generate(3);
console.log("generateRes", generateRes);
