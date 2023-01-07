var maxArea = function (height) {
  debugger;
  let start = 0;
  let end = height.length - 1;
  let maxArea = 0; //7,42
  while (start < end) {
    console.log("start", start);
    let area = Math.min(height[start], height[end]) * (end - start);
    if (area > maxArea) maxArea = area;
    if (Math.min(height[start], height[end]) === height[start]) start++;
    else end--;
  }
  return maxArea;
};
const maxAreaRes = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log("maxAreaRes", maxAreaRes);
