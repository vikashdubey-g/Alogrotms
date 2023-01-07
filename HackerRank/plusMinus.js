const plusMinus = (arr) => {
  const len = arr.length;
  let posCount = 0;
  let negCount = 0;
  let zerCount = 0;
  for (const item of arr) {
    if (item > 0) {
      posCount++;
    } else if (item < 0) {
      negCount++;
    } else zerCount++;
  }
  console.log(Number((posCount / len).toPrecision(6))),
  console.log(Number((negCount / len).toPrecision(6))),
  console.log(Number((zerCount / len).toPrecision(6)))
//   return [
//     Number((posCount / len).toFixed(6)),
//     Number((negCount / len).toPrecision(6)),
//     Number((zerCount / len).toPrecision(6)),
//   ];
};
const plusMinusRes = plusMinus([1, 1, 0, -1, -1]);
console.log("plusMinusRes", plusMinusRes);
