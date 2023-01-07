var findMinArrowShots = function (points) {
  const len = points.length;
  if (!len) return;
  // first sorting the ballon in increasing order according to their x-end point
  points.sort((a, b) => a[1] - b[1]);
  let arrow = 1; // initialize the arrow with 1 because at least one arrow is needed to burst the ballon
  let end = points[0][1]; //first we will take first X-End for comparison with other xEnd co-ordinates
  for (let i = 1; i < len; i++) {
    if (points[i][0] > end) {
      // comparing the second X-start with first x-end to check whether it falls into the range or not
      arrow++;
      end = points[i][1];
    }
  }
  return arrow;
};

const findMinArrowShotsRes = findMinArrowShots([
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
]);
console.log("findMinArrowShotsRes", findMinArrowShotsRes);
