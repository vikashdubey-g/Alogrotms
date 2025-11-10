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
//703 easy

var productExceptSelf = function (nums) {
  const len = nums.length;
  if (!len) return;
  const res = [];
  let product = 1;
  // storing the cumulative left product insde the res
  for (let i = 0; i < len; i++) {
    product *= nums[i];
    res.push(product);
  }
  // Traverse from the right and update the output array
  product = 1;
  for (let i = len - 1; i > 0; i--) {
    res[i] = res[i - 1] * product;
    product *= nums[i];
  }
  res[0] = product;
  return res;
};

var productExceptSelf = function (nums) {
  const len = nums.length;
  if (!len) return;
  const leftProducts = [];
  const rightProducts = [];
  const res = [];
  leftProducts[0] = 1;
  rightProducts[len - 1] = 1;
  // storing the cumulative left product
  for (let i = 1; i < len; i++) {
    leftProducts[i] = nums[i - 1] * leftProducts[i - 1];
  }
  // storing the cumulative right product
  for (let j = len - 2; j >= 0; j--) {
    rightProducts[j] = nums[j + 1] * rightProducts[j + 1];
  }
  // storing the product in output array
  for (let i = 0; i < len; i++) {
    res[i] = leftProducts[i] * rightProducts[i];
  }

  return res;
};

const productExceptSelfRes = productExceptSelf([1, 2, 3, 4]);
console.log("productExceptSelfRes", productExceptSelfRes);
//409

const longestSubstring = (s) => {
  if (!s) return;
  let set = new Set();
  let start = 0;
  let end = 0;
  let max = 0;
  while (start < s.length) {
    if (!set.has(s[start])) {
      set.add(s[start]);
      maxLen = start - end + 1;
      max = Math.max(max, maxLen);
      start++;
    } else {
      set.delete(s[end]);
      end++;
    }
  }
  return max;
};

const longestSubstringRes = longestSubstring("abcabcbb");
console.log("longestSubstringRes", longestSubstringRes);

const memo = () => {
  const cache = {};
  return (nums) => {
    if (nums in cache) {
      return cache[nums];
    } else {
      cache[nums] = nums + 10;
      return cache[nums];
    }
  };
};
const res = memo();
// console.log("memo", res(20));

var longestPalindrome = function (s) {
  if (!s) return;
  if (s.length === 1) return 1;
  const set = new Set();
  let len = 0;
  for (const items of s) {
    if (set.has(items)) {
      len += 2;
      set.delete(items);
    } else {
      set.add(items);
    }
  }
  return set.size > 0 ? len + 1 : len;
};

const longestPalindromeRes = longestPalindrome("abccccdd");
// console.log("longestPalindromeRes", longestPalindromeRes);

const rotateImage = (matrix) => {
  const len = matrix.length;
  if (!len) return;
  // first transpose the matrix
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  // reversing the row value
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len / 2; j++) {
      [matrix[i][j], matrix[i][len - 1 - j]] = [
        matrix[i][len - 1 - j],
        matrix[i][j],
      ];
    }
  }
  return matrix;
};

const rotateImageRes = rotateImage([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log("rotateImageRes", rotateImageRes);

// const user = [
//   { name: "john", category: "student" },
//   { name: "nick", category: "teacher" },
//   { name: "max", category: "student" },
//   { name: "ninda", category: "teacher" },
// ];

// const resff = Object.groupBy(user, ({ category }) => category);
// console.log("resff", resff)

// const reverseArray = (arr) => {
//   let i = 0;
//   let j = arr.length - 1;
//   while (i < j) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     i++;
//     j--;
//   }
//   return arr;
// };

// const reverseArrayRes = reverseArray([1, 2, 3, 4, 5, 6]);
// console.log("reverseArrayRes", reverseArrayRes);

// var search = function (nums, target) {
//   let start = 0;
//   let end = nums.length - 1;
//   // nums = nums.sort((a, b) => a - b)
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (nums[mid] === target) return mid;
//     else if (nums[mid] < target) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }
//   return -1;
// };

// const searchRes = search([0, 1, 2, 4, 5, 6, 7], 0);
// console.log("searchRes", searchRes);

const sortString = (s) => {
  return s.split("").sort().join("");
};

var groupAnagrams = function (strs) {
  const strsLen = strs.length;
  if (!strsLen) return;
  const map = new Map();
  for (const items of strs) {
    const sortedItems = sortString(items);
    if (!map[sortedItems]) {
      map[sortedItems] = [];
    }
    map[sortedItems].push(items);
  }
  return Object.values(map);
};
const groupAnagramsRes = groupAnagrams([
  "eat",
  "tea",
  "tan",
  "ate",
  "nat",
  "bat",
]);
console.log("groupAnagramsRes", groupAnagramsRes);
