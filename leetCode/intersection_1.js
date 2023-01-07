var intersection = function (nums1, nums2) {
  const set = new Set();
  const secondSet = new Set();
  const res = [];
  for (let i = 0; i < nums1.length; i++) {
    set.add(nums1[i]);
  }
  for (let i = 0; i < nums2.length; i++) {
    secondSet.add(nums2[i]);
  }

  for (let item of secondSet) {
    if (set.has(item)) {
      res.push(item);
    }
  }

  return res;
};

const intersectionRes = intersection([4, 9, 5], [9, 4, 9, 8, 4]);
console.log("intersectionRes", intersectionRes);
