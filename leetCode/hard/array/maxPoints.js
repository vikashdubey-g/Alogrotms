var maxPoints = function (points) {
    // we are using slope approach to find the number of consitent points
    const len = points.length;
    if (!len) return;
  
    let max = 0;
    for (const x of points) {
      const slopes = new Map();
      for (const y of points) {
        if (x === y) continue;
        let slope = Infinity; // setting the infinity when x-cordinates have same value
        if (y[0] - x[0] !== 0) {
          // only if both points are not same
          slope = (y[1] - x[1]) / (y[0] - x[0]);
        }
  
        if (slopes.has(slope)) {
          slopes.set(slope, slopes.get(slope) + 1);
        } else {
          slopes.set(slope, 1);
        }
        max = Math.max(max, slopes.get(slope));
      }
    }
    return max + 1;
  };
  
  const maxPointsRes = maxPoints([
    [1, 1],
    [2, 2],
    [3, 3],
  ]);
  console.log("maxPointsRes", maxPointsRes);