var isValidSudoku = function (board) {
  const len = board.length;
  if (!len) return;
  const s = Math.sqrt(len);
  const emptyVal = ".";
  for (let i = 0; i < 9; i++) {
    // we need set data structure to avoid duplicacy
    let rowSet = new Set(),
      colSet = new Set(),
      boxSet = new Set();

    for (let j = 0; j < 9; j++) {
      const rowEle = board[i][j];
      const colEle = board[j][i];
      const boxEle =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      // checking for horizontal ele or row If the element is not empty also no one element is duplicate
      if (rowEle !== emptyVal) {
        if (rowSet.has(rowEle)) return false;
        rowSet.add(rowEle);
      }

      // checking for vertical or column If the element is not empty also no one element is duplicate
      if (colEle !== emptyVal) {
        if (colSet.has(colEle)) return false;
        colSet.add(colEle);
      }
      // checking in the box
      if (boxEle !== emptyVal) {
        if (boxSet.has(boxEle)) return false;
        boxSet.add(boxEle);
      }
    }
  }
  return true;
};

const isValidSudokuRes = isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);
console.log("isValidSudokuRes", isValidSudokuRes);
