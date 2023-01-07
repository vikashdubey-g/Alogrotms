var heightChecker = function (heights) {
    let ctr = 0;
    let sorted_height = heights.slice().sort((a, b) => a - b);
    for (let i = 0; i < heights.length; i++) {
      if (heights[i] !== sorted_height[i]) ctr++;
    }
    return ctr;
  };
  
  const heightCheckerRes = heightChecker([1, 1, 4, 2, 1, 3]);
  console.log("heightCheckerRes", heightCheckerRes);