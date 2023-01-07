var singleNumber = function (nums) {
    const map = new Map();
    for (let items of nums) {
      if (map[items]) {
        map[items]++;
      } else {
        map[items] = 1;
      }
    }
    for (let i in map) {
      if (map[i] === 1) {
        return i;
      }
    }
  };
  
  const singleNumberRes = singleNumber([2, 2, 1]);
  console.log("singleNumberRes", singleNumberRes);