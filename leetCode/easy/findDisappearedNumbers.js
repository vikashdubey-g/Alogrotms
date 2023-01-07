var findDisappearedNumbers = function (nums) {
    let set = new Set(nums);
    const res = [];
    for (let i = 1; i <= nums.length; i++) {
      if (!set.has(i)) {
        res.push(i);
      }
    }
    return res;
  };
  
  const findDisappearedNumbersRes = findDisappearedNumbers([
    5, 4, 6, 7, 9, 3, 10, 9, 5, 6,
  ]);
  console.log("findDisappearedNumbersRes", findDisappearedNumbersRes);

  // var findDisappearedNumbers = function (nums) {
  //   const len = nums.length;
  //   if (!len) return;
  //   let ctr = 0;
  //   let i = 0;
  //   for (; i < len; i++) {
  //     console.log("nums[i]", nums[i]);
  //     const ele = i + 1;
  //     if (!nums.includes(ele)) {
  //       nums[ctr] = ele;
  //       ctr++;
  //       i--;
  //     }
  //   }
  
  //   return nums.splice(0, ctr);
  // };