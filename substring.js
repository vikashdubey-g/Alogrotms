// checking sum zero - Problem 1
// const arr = [-5, -4, -3, -2, 0, 4, 6, 8];
// const len = arr.length;
// const target = 0;
// const newArr = [];

// const checkingSum = (Arr) => {
//   for (let number of Arr) {
//     for (let j = 1; j < len; j++) {
//       if (number + Arr[j] === 0) {
//         return [number, Arr[j]];
//       }
//     }
//   }
//   return newArr;
// };

// const checkingSum = (Arr) => {
//   let left = 0;
//   let right = Arr.length - 1;
//   while (left < right) {
//     sum = Arr[left] + Arr[right];
//     if (sum === 0) {
//       return [Arr[left], Arr[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// };

// const res = checkingSum(arr);
// console.log("res", res);







// count unique numbers
const uniqueArr = [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8];
const obj = {};
const len = uniqueArr.length;
const newArr = [];

const uniqueEleOfArray = () => {
  for (let item of uniqueArr) {
    if (newArr.indexOf(item) === -1) {
      newArr.push(item);
    }
  }
  return newArr;
};

const resuniqueEleOfArray = uniqueEleOfArray();
console.log("resuniqueEleOfArray", resuniqueEleOfArray);
