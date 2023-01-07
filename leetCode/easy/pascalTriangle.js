var generate = function (numRows) {
  if (!numRows) return;
  const res = [];
  for (let i = 0; i < numRows; i++) {
    let rows = new Array(i + 1);
    // in pascal triangle first and last element is always 1
    rows[0] = 1;
    rows[rows.length - 1] = 1;

    for (let j = 1; j < rows.length - 1; j++) {
      const prevRow = res[i - 1]; // to put the value between 1 and 1 we have to look into the above row
      rows[j] = prevRow[j] + prevRow[j - 1]; // and then add the sum of two index of prevrows
    }
    // putting all the rows in the result array
    res[i] = rows;
  }
  return res;
};

const generateRes = generate(5);
console.log("generateRes", generateRes);
