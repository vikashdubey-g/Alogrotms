var maxIceCream = function (costs, coins) {
  const len = costs.length;
  if (!len || !coins) return;
  costs.sort((a, b) => a - b); // sorting the cost array
  let ctr = 0;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += costs[i];
    ctr++;
    if (sum === coins) return ctr;
    if (sum > coins) return ctr - 1; // this for when a cost increased the coin value till then count also increased that's we need to decrement the counter
  }
  return ctr;
};

const maxIceCreamRes = maxIceCream([10, 6, 8, 7, 7, 8], 5);
console.log("maxIceCreamRes", maxIceCreamRes);
