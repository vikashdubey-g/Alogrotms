var maxProfit = function (prices) {
  let minProfit = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    minProfit = Math.min(prices[i], minProfit);
    maxProfit = Math.max(maxProfit, prices[i] - minProfit);
  }
  return maxProfit;
};

const maxProfitRes = maxProfit([7, 1, 5, 3, 6, 4]);
console.log("maxProfitRes", maxProfitRes);
