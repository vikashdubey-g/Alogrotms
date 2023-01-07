const sortString = (s) => {
    return s.split("").sort().join("");
  };
  
  var groupAnagrams = function (strs) {
    const len = strs.length;
    if (!len) return;
    const map = new Map();
    for (const items of strs) {
      const sortedItems = sortString(items);
      if (!map[sortedItems]) {
        map[sortedItems] = [items];
      } else {
        map[sortedItems].push(items);
      }
    }
  
    return Object.values(map);
  };
  
  const groupAnagramsRes = groupAnagrams([""]);
  console.log("groupAnagramsRes", groupAnagramsRes);