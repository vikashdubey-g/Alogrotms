var intersect = function (nums1, nums2) {
  if (!nums1.length || !nums2.length) return;
  const res = [];
  const map = new Map();
  for (const items of nums1) {
    map[items] = map[items] + 1 || 1;
  }

  for (const items of nums2) {
    if (map[items]) {
      res.push(items);
      map[items]--;
    }
  }
  return res;
};

const intersectRes = intersect([1, 2, 2, 1], [2, 2]);
console.log("intersectRes", intersectRes);
