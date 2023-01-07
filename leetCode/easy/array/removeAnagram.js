var removeAnagrams = function (words) {
  const len = words.length;
  if (!len) return;
  const res = [];
  let prevSortedWord = "";
  for (const items of words) {
    const sortedItems = items.split("").sort().join("");
    if (sortedItems !== prevSortedWord) {
      res.push(items);
    }

    prevSortedWord = sortedItems;
  }
  return res;
};

var removeAnagrams = function (words) {
  const len = words.length;
  if (!len) return;
  const res = [];
  let prevSortedWord = "";
  for (const items of words) {
    const sortedItems = items.split("").sort().join("");
    if (sortedItems === prevSortedWord) continue;

    prevSortedWord = sortedItems;
    res.push(items);
  }
  return res;
};

const removeAnagramsRes = removeAnagrams(["a", "b", "a"]);
console.log("removeAnagramsRes", removeAnagramsRes);
