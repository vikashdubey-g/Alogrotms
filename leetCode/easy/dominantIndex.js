var dominantIndex = function (nums) {
    let max = nums[0];
    for (const items of nums) {
      if (items > max) max = items;
    }
  
    for (let i = 0; i < nums.length; i++) {
      const double = nums[i] * 2;
      if (nums[i] !== max && max < double) return -1;
    }
    return nums.indexOf(max);
  };

  var dominantIndex = function (nums) {
    const len  = nums.length
    if(!len) return;
    let max = Math.max(...nums)
    console.log('max', max)
    // let max = nums[0];
    // for (const items of nums) {
    //   if (items > max) max = items;
    // }
  
    for (let i = 0; i < nums.length; i++) {
      const double = nums[i] * 2;
      if (nums[i] !== max && max < double) return -1;
    }
    return nums.indexOf(max);
  };
  
  const dominantIndexRes = dominantIndex([1, 2, 3, 4]);
  console.log("dominantIndexRes", dominantIndexRes);
  
 