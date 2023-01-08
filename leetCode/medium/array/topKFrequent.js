var topKFrequent = function (nums, k) {
  const len = nums.length;
  if (!len || !k) return;
  const res = [];
  const map = new Map();
  for (const items of nums) {
    // storing the frequency of element inside the map
    map[items] = map[items] + 1 || 1;
  }

  const mapSort = Object.entries(map).sort((a, b) => b[1] - a[1]); // sorting the map according to their values
  const result = mapSort.slice(0, k); // cutting out the number of k element from the map
  for (let i = 0; i < result.length; i++) {
    // pushing the most frequent number inside the result array
    res.push(+result[i][0]);
  }
  return res;
};

const topKFrequentRes = topKFrequent([1], 1);
console.log("topKFrequentRes", topKFrequentRes);
