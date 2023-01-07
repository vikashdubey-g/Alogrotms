var findNumbers = function (nums) {
    let ctr = 0;
    for (const items of nums) {
      if (!(items.toString().length % 2)) ctr++;
    }
    return ctr;
  };
  
  const findNumbersRes = findNumbers([12, 345, 2, 6, 7896]);
  
  console.log("findNumbersRes", findNumbersRes);
  