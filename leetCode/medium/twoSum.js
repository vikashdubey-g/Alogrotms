var twoSum = function (numbers, target) {
    if (numbers.length <= 1) return;
    const map = new Map();
    for (let i = 0; i <= numbers.length - 1; i++) {
      let cur = numbers[i];
      let complements = target - cur;
      if (map[cur] >= 0) return [map[cur] + 1, i + 1];
      map[complements] = i;
    }
    return false;
  };
  
  // var twoSum = function (numbers, target) {
  //   if (numbers.length <= 1) return;
  //   let flag = false;
  //   for (let i = 0; i < numbers.length - 1; i++) {
  //     for (let j = i + 1; j <= numbers.length - 1; j++) {
  //       if (numbers[i] + numbers[j] === target) {
  //         flag = true;
  //         return [i + 1, j + 1];
  //       }
  //       if (flag) break;
  //     }
  //   }
  // };

  // var twoSum = function (numbers, target) {
  //   if (numbers.length <= 1) return;
  //   let start = 0;
  //   let end = numbers.length - 1;
  //   while (start <= end) {
  //     if (numbers[start] + numbers[end] === target) return [start + 1, end + 1];
  //     else if (numbers[start] + numbers[end] < target) start++;
  //     else end--;
  //   }
  // };

  // var twoSum = function (numbers, target) {
  //   if (numbers.length <= 1) return;
  //   const map = new Map();
  //   for (let i = 0; i < numbers.length; i++) {
  //     const element = numbers[i];
  //     let requiredVal = target - element;
  //     if (map.has(requiredVal)) return [map.get(requiredVal) + 1, i + 1];
  //     else map.set(element, i);
  //   }
  // };
  
  const twoSumRes = twoSum([2, 7, 11, 15], 9);
  console.log("twoSumRes", twoSumRes);
  