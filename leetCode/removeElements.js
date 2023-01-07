var removeElement = function (nums, val) {
    debugger;
    let index = 0;
    for (const items of nums) {
      if (items !== val) {
        nums[index++] = items;
      }
    }
    return index 
  };
  
  const removeElementRes = removeElement([3,2,2,3], 3);
  console.log("removeElementRes", removeElementRes);