const recurFunc = (grid, start, end) => {
    if (start < 0 || end < 0 || start >= grid.length || end >= grid[0].length) //edge case for the traverse only inside the matrix
      return;
    if (grid[start][end] === "0") return;
    grid[start][end] = "0";
    recurFunc(grid, start + 1, end); // checking every neighbouring elements
    recurFunc(grid, start - 1, end);
    recurFunc(grid, start, end + 1);
    recurFunc(grid, start, end - 1);
  };
  var numIslands = function (grid) {
    const len = grid.length;
    if (!len) return;
    let count = 0;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === "1") { // searching for the 1's element
          recurFunc(grid, i, j); // created a recursive function 
          count++;
        }
      }
    }
  
    return count;
  };
  
  const numIslandsRes = numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ]);
  
  console.log('numIslandsRes', numIslandsRes)