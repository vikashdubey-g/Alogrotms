var largestNumber = function (nums) {
  const sorted = nums.sort((a, b) => {
    const ab = a.toString() + b.toString();
    const ba = b.toString() + a.toString();
    return ba - ab;
  });
  const joined = sorted.join("");
  if (parseInt(joined) === 0) {
    return "0";
  } else return joined;
};

const largestNumberRes = largestNumber([3, 30, 34, 5, 9]);
// console.log("largestNumberRes", largestNumberRes);
//2273
//438

var findAnagrams = function (s, p) {
  let hashMap = new Map();
  for (let i = 0; i < p.length; i++) {
    if (hashMap.has(p[i])) {
      hashMap.set(p[i], hashMap.get(p[i]) + 1);
    } else {
      hashMap.set(p[i], 1);
    }
  }

  let res = [];
  let start = 0,
    end = 0;
  while (end < s.length) {
    if (hashMap.get(s[end]) > 0) {
      hashMap.set(s[end], hashMap.get(s[end]) - 1);
      end++;
      if (end - start == p.length) {
        res.push(start);
      }
    } else if (start == end) {
      start++;
      end++;
    } else {
      hashMap.set(s[start], hashMap.get(s[start]) + 1);
      start++;
    }
  }
  return res;
};

const findAnagramsRes = findAnagrams("abab", "ab");
// console.log("findAnagramsRes", findAnagramsRes);

//200
var numIslands = function (grid) {};

const numIslandsRes = numIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
]);

var canCompleteCircuit = function (gas, cost) {
  const gasLen = gas.length;
  const costLen = cost.length;
  if (!gasLen || !costLen || gasLen !== costLen) return -1; // length of both the array should be equal
  let curr = 0;
  let totalFuel = 0,
    totalCost = 0,
    start = 0;
  for (let i = 0; i < gasLen; i++) { // calculating the sum of both the array
    totalFuel += gas[i];
    totalCost += cost[i];
  }
  if (totalFuel < totalCost) return -1; // if fuel is less than cost then it can't be happen

  for (let i = 0; i < gasLen; i++) {
    curr += gas[i] - cost[i];
    if (curr < 0) { // always current fuel should be in positive to travel from one place to another
      start = i + 1; // increment the index value
      curr = 0;
    }
  }
  return start;
};

const canCompleteCircuitRes = canCompleteCircuit(
  [1, 2, 3, 4, 5],
  [3, 4, 5, 1, 2]
);
console.log("canCompleteCircuitRes", canCompleteCircuitRes);
