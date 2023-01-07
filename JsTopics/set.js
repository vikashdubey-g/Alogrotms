const mySet = new Set();
mySet.add(5);
mySet.add(10);
mySet.add("vikash");
const o = { a: 1, b: 2 };
mySet.add(o);
mySet.add([1, 2, 3]);

// console.log("mySet", mySet);

// for (let item of mySet.values()) {
//   console.log("item", item);
// }
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);
// const union = (setOne, setTwo) => {
//   const _union = setOne;
//   for (let item of setTwo) {
//     _union.add(item);
//   }
//   return _union;
// };

// const unionRes = union(setA, setC); // { 1, 2, 3, 4, 5, 6 }
// console.log("unionRes", unionRes);

// const intersection = (setOne, setTwo) => {
//   const _intersection = new Set();
//   for (let item of setTwo) {
//     if (setOne.has(item)) {
//       _intersection.add(item);
//     }
//   }
//   return _intersection;
// };

// const intersectionRes = intersection(setA, setC); // {3, 4}
// console.log("intersectionRes", intersectionRes);

// const difference = (setOne, setTwo) => {
//   const _difference = setOne;
//   for (const item of setTwo) {
//     if (setOne.has(item)) {
//       _difference.delete(item);
//     }
//   }
//   return _difference;
// };

// const differenceRes = difference(setA, setC); // { 1, 2 }
// console.log("differenceRes", differenceRes);

// const symmetricDifference = (setOne, setTwo) => {
//   const _difference = setOne;
//   for (const item of setTwo) {
//     if (_difference.has(item)) {
//       _difference.delete(item);
//     } else _difference.add(item);
//   }
//   //  const res = new Set();
//   //   const commonEle = new Set();
//   //   for (const item of setOne) {
//   //     if (setTwo.has(item)) {
//   //       commonEle.add(item); //{3, 4}
//   //     }
//   //     if (!commonEle.has(item)) {
//   //       res.add(item); // { 1, 2}
//   //     }
//   //   }
//   //   for (const item of setTwo) {
//   //     if (!commonEle.has(item)) {
//   //       res.add(item); // {5, 6}
//   //     }
//   //   }
//   return _difference;
// };

// const symmetricDifferenceRes = symmetricDifference(setA, setC);
// console.log("symmetricDifferenceRes", symmetricDifferenceRes);

// const isSuperset = (setOne, setTwo) => {
//   for (const item of setTwo) {
//     if (!setOne.has(item)) {
//       return false;
//     }
//   }
//   return true;
// };
// const isSupersetRes = isSuperset(setA, setB);
// console.log("isSupersetRes", isSupersetRes);
