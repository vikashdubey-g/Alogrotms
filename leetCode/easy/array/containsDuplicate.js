var containsDuplicate = function (nums) {
  if (!nums.length) return;
  const map = new Map();
  for (const items of nums) {
    if (map.has(items)) {
      return true;
    }
    map.set(items);
  }
  return false;
};

const containsDuplicateRes = containsDuplicate([2, 3, 1]);
console.log("containsDuplicateRes", containsDuplicateRes);
