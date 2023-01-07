// Simple Currying
// const sum = (a) => {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     };
//   };
// };

// const sumRes = sum(5)(2)(8);
// console.log("sumRes", sumRes);

// Infinite Currying
// const sumInfinite = (a) => {
//   return (b) => {
//     if (b) return sumInfinite(a + b);
//     return a;
//   };
// };

// const sumInfiniteRes = sumInfinite(5)(2)(8)(15)();
// console.log("sumInfiniteRes", sumInfiniteRes);
// const sum = a => b => b ? sum(a + b) : a;
// opertations
// const MultipleOperations = (type) => {
//   return (a) => {
//     return (b) => {
//       if (type === "add") {
//         return a + b;
//       } else if (type === "sub") {
//         return a - b;
//       } else if (type === "mul") {
//         return a * b;
//       } else if (type === "div") {
//         return a / b;
//       } else return "type not matching";
//     };
//   };
// };

// const MultipleOperationsRes = MultipleOperations("add");
// console.log("MultipleOperationsResAdd", MultipleOperationsRes(84)(2));

// Dom Manipulation

// const domManipulation = (id) => {
//   return (content) => {
//     document.querySelector("#" + id).textContent = content;
//   };
// };

// const domManipulationRes = domManipulation("heading");
// console.log(
//   "domManipulationRes",
//   domManipulationRes("My name is Vikash Dubey")
// );
