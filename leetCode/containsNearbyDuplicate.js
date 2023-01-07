var containsNearbyDuplicate = function (nums, k) {
    let set = new Map();
    for (let i = 0; i < nums.length; i++) {
      let curr = nums[i];
      if (!set.has(curr)) {
        set.set(curr, i);
      } else {
        if (Math.abs(set.get(curr) - i) <= k) return true;
        else set.set(curr, i);
      }
    }
  
    return false;
  };
  
  const containsNearbyDuplicateRes = containsNearbyDuplicate(
    [1, 2, 3, 1, 2, 3],
    2
  );
  console.log("containsNearbyDuplicateRes", containsNearbyDuplicateRes);
  