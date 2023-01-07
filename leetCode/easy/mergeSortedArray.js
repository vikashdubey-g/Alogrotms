var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m);
  nums2.splice(n, nums2.length - n);
  for (let i = 0; i < nums2.length; i++) {
    const element = nums2[i];
    nums1.push(element);
  }
  for (let i = 0; i < nums1.length; i++) {
    for (let j = i + 1; j < nums1.length; j++) {
      if (nums1[i] > nums1[j]) {
        [nums1[i], nums1[j]] = [nums1[j], nums1[i]];
      }
    }
  }
  // return nums1.sort((a,b) => a-b)
  return nums1;
};

const mergeRes = merge([0], 0, [1], 1);
console.log("mergeRes", mergeRes);
