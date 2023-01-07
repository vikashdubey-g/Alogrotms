// 2-> 1,2
// 3-> 1,1,1||1,2||2,1
// 4-> 1,1,1,1||2,1,1||1,2,1||1,1,2||2,2
const stepsCount = (n) => {
  if (n == 0) {
    return 0;
  }
  let stair = [];
  stair[0] = 1;
  stair[1] = 2;
  for (let i = 2; i <= n; i++) {
    stair[i] = stair[i - 1] + stair[i - 2];
  }
  return stair[n];
};

const climbStairsRes = stepsCount(5);
console.log("climbStairsRes", climbStairsRes);

// const stepsCount = (n) => {
//   if (n === 0 || n === 1) {
//     return n;
//   }
//   n1 = 1;
//   n2 = 2;
//   for (let i = 3; i <= n; i++) {
//     let nextN = n1 + n2;
//     n1 = n2;
//     n2 = nextN;
//   }
//   return n2;
// };
