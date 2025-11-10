// const incrementLastDigit = (arr) => {
//   const len = arr.length;
//   if (!len) return;
//   for (let i = len - 1; i >= 0; i--) {
//     if (arr[i] < 9) {
//       arr[i]++;
//       return arr;
//     } else {
//       arr[i] = 0;
//     }
//   }
//   arr.push(0);
//   arr[0] = 1;
//   return arr;
// };

// const incrementLastDigitRes = incrementLastDigit([1, 2, 9]);
// console.log("incrementLastDigitRes", incrementLastDigitRes);

// const reverseInteger = (num) => {
//   let res = 0;
//   while (num > 0) {
//     rem = num % 10;
//     res = res * 10 + rem;
//     num = parseInt(num / 10);
//   }
//   return res;
// };

// const reverseIntegerRes = reverseInteger(526);
// console.log("reverseIntegerRes", reverseIntegerRes);

// const fibonacci = (n) => {
//   if (n === 0 || n === 1) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// const fibonacciRes = fibonacci(4);
// console.log("fibonacciRes", fibonacciRes);

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const map = new Map();
  for (const items of s) {
    map[items] = map[items] + 1 || 1;
  }

  for (const items of t) {
    if (!map[items]) return false;
    map[items]--;
  }

  return true;
};

const isAnagramRes = isAnagram("anagram", "nagaram");
// console.log("isAnagramRes", isAnagramRes);

const maxProfit = (prices) => {
  let minPrice = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    profit = Math.max(profit, prices[i] - minPrice);
  }

  return profit;
};

const maxProfitRes = maxProfit([7, 1, 5, 3, 6, 4]);
console.log("maxProfitRes", maxProfitRes);


function flattenObject(obj, parentKey = '', result = {}) {
  for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}


// const obj = { a: { b: { c: 1 } }, d: 2 };
const obj  = {
  country: "USA",
  state: {
      name: "California",
      code: "CA",
      cities: {
          SanFrancisco: {
              pincode: 94101,
              population: 870000
          }
      }
  },
  state2: {
      name: "New York",
      code: "NY",
      cities: {
          NewYorkCity: {
              pincode: 10001,
              population: 8000000
          }
      }
  }
};
console.log(flattenObject(obj)); // { 'a.b.c': 1, 'd': 2 }