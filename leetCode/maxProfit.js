// var maxProfit = function (prices) {
//   debugger;
//   if (prices.length === 0 || prices.length < 2) {
//     return 0;
//   }
//   const len = prices.length - 1;
//   let minPrice = prices[0];
//   let maxPrice = prices[0];
//   let minPriceInd = 0;

//   for (let i = 0; i <= len; i++) {
//     if (prices[i] < minPrice) {
//       minPrice = prices[i];
//       minPriceInd = i;
//     }
//   }
//   if (minPriceInd === len) {
//     return 0;
//   }

//   for (let i = minPriceInd; i <= len; i++) {
//     if (prices[i] > maxPrice) {
//       maxPrice = prices[i];
//     }
//   }

//   return maxPrice - minPrice;
// };

var maxProfit = function (prices) {
    let minPrice = prices[0];
    let maxProfit = 0;//0,2,6
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      } else {
        maxProfit = Math.max(maxProfit, prices[i]- minPrice);
      }
    }
  
    return maxProfit;
  };
  // 2, 4, 1
  const maxProfitRes = maxProfit([3, 5, 1, 7, 4, 9, 3]);
  console.log("maxProfitRes", maxProfitRes);
  