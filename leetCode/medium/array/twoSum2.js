var twoSum = function (numbers, target) {
    const len = numbers.length;
    if (!len) return;
    const map = new Map();
    for (let i = 0; i < len; i++) {
      let requiredVal = target - numbers[i]; // subtracting the element from the target to find out the compliments
      if (map.has(requiredVal)) return [map.get(requiredVal) + 1, i + 1];
      else map.set(numbers[i], i);
    }
  };
  
  const twoSumRes = twoSum([2, 7, 11, 15], 9);
  console.log("twoSumRes", twoSumRes);