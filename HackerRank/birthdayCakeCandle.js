const birthdayCakeCandle = (candles) => {
  let maxYear = candles[0];
  let count = 0;
  for (const item of candles) {
    if (item > maxYear) {
      maxYear = item;
    }
    if (item === maxYear) {
      count++;
    }
  }
  // for (const item of candles) {
  //   if (item === maxYear) {
  //     count++;
  //   }
  // }
  return count;
};

const birthdayCakeCandleRes = birthdayCakeCandle([4, 4, 1, 3, 4, 4, 4, 4]);
console.log("birthdayCakeCandleRes", birthdayCakeCandleRes);
