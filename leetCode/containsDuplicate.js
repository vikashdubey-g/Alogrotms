// var containsDuplicate = function (nums) {
//   let map = new Map();
//   for (let items of nums) {
//     if (map[items]) {
//       map[items]++;
//     } else {
//       map[items] = 1;
//     }
//   }

//   for (let k in map) {
//     if (map[k] !== 1) {
//       return true;
//     }
//   }
//   return false;
// };

var containsDuplicate = function (nums) {
  let map = new Map();
  for (let items of nums) {
    if (!map.has(items)) {
      return true;
    } else {
      map.set(items);
    }
  }
  return false;
};

const containsDuplicateRes = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
console.log("containsDuplicateRes", containsDuplicateRes);
