var averageValue = function (nums) {
    const len = nums.length;
    if (!len) return;
    let sum = 0;
    let count = 0;
    for (const items of nums) {
      if (!(items % 6)) {
        sum += items;
        count++;
      }
    }
    return sum === 0 ? sum : Math.floor(sum / count);
  };
  const averageValueRes = averageValue([
    94, 65, 82, 40, 79, 74, 92, 84, 37, 19, 16, 85, 20, 79, 25, 89, 55, 67, 84, 3,
    79, 38, 16, 44, 2, 54, 58, 94, 69, 71, 14, 24, 13, 21,
  ]);
  console.log("averageValueRes", averageValueRes);