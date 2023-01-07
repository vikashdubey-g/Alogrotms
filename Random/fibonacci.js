// 1 1 2 3
// 1 1 2 3 5
// i = 0, 1, 2
const fibonacci = (n) => {
  n1 = 0;
  n2 = 1;
  let nextTerm = 0  ;
  for (let i = 0; i <= n; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    console.log(nextTerm);
  }
  return nextTerm;
};

const fibonacciRes = fibonacci(5);
console.log("fibonacci series", fibonacciRes);
// const fibonacci = (n) => {
//     const fibList = [1];
//     let intVal = 1;
//     for (let i = 0; i <= n; i++) {
//       if (fibList.length === 1) {
//         intVal = i + fibList.at(-1);
//       } else {
//         intVal = i + fibList.at(-2);
//       }
//       fibList.push(intVal);
//     }
//     return fibList;
//   };

// const fibonacci = (n) => {
//   let n1 = 0;
//   let n2 = 1;
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum = n1 + n2;
//     n1 = n2;
//     n2 = sum;
//   }
//   return sum;
// };
