// var thirdMax = function (nums) {
//   if (!nums.length) return;
//   nums.sort((a, b) => b - a);
//   let prevEle = nums[0];
//   let eleCtr = 1;
//   for (let i = 1; i < nums.length; i++) {
//     const curEle = nums[i];
//     if (prevEle !== curEle) {
//       eleCtr++;
//       prevEle = curEle;
//     }

//     if (eleCtr === 3) return curEle;
//   }
//   return nums[0];
// };



var thirdMax = function (nums) {
    if (!nums.length) return;
    let min = -(Math.pow(2, 31) - 1);
    let firstMax = min;
    let secondMax = min;
    let thirdMax = min;
    for (const items of nums) {
      if (firstMax === items || secondMax === items || thirdMax === items)
        continue;
      if (items >= firstMax) {
        thirdMax = secondMax;
        secondMax = firstMax;
        firstMax = items;
      } else if (items >= secondMax) {
        thirdMax = secondMax;
        secondMax = items;
      } else if (items >= thirdMax) thirdMax = items;
    }
    return thirdMax === min ? firstMax : thirdMax;
  };
  
  const res = thirdMax([3, 2, 1]);
  console.log("res", res);
  