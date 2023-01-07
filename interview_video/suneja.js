// Q=>5 find the largest digit sum

// const largestSum = (array, num) => {
//   if (num > array.length) {
//     throw new Error("please insert proper array");
//   }
//   let max = 0;
//   for (let i = 0; i < array.length - num + 1; i++) {
//     let temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += array[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// };

// const largestSumRes = largestSum([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
// console.log("largestSumRes", largestSumRes);

// Q=>6 binary Search
// const binarySearch = (arr, num) => {
//   let min = 0;
//   let max = arr.length - 1;
//   while (min <= max) {
//     let midIndex = Math.floor((min + max) / 2);
//     if (arr[midIndex] < num) {
//       min = midIndex + 1;
//     } else if (arr[midIndex] > num) {
//       max = midIndex - 1;
//     } else return midIndex;
//   }
// };

// const binarySearchRes = binarySearch(
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
//   7
// );

// console.log("binarySearchRes", binarySearchRes);

// Q=>7 checking square of one array is present in another array
// first method

// const squareChecking = (array1, array2) => {
//   for (let i = 0; i < array1.length; i++) {
//     let isSquare = false;
//     for (let j = 0; j < array2.length; j++) {
//       if (array1[i] * array1[i] === array2[j]) {
//         isSquare = true;
//       }
//       if (j === array2.length - 1 && !isSquare) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

// const squareCheckingRes = squareChecking([1, 2, 3, 4], [1, 4, 9, 16]);
// console.log("squareCheckingRes", squareCheckingRes);

// second method

// const squareCheck = (array1, array2) => {
//   let map1 = {};
//   let map2 = {};
//   for (item of array1) {
//     map1[item] = (map1[item] || 0) + 1;
//   }
//   for (item2 of array2) {
//     map2[item2] = (map2[item2] || 0) + 1;
//   }
//   for (let key in map1) {
//     console.log('key', key)
//     if (!map2[key * key]) {
//       return false;
//     }
//     console.log('map1[key]', map1[key])
//     if (map1[key] !== map2[key * key]) {
//       return false;
//     }
//   }
//   return true;
// };

// const squareCheckRes = squareCheck([1, 2, 4, 2], [1, 4, 4, 16]);
// console.log("squareCheckRes", squareCheckRes);

// Q => 8 Sorting an array with the recursive function

// const isSorted = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > array[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// };

// let i = 0;
// let j = 1;
// let myNewList = [];

// const sortingArray = (array) => {
//   if (isSorted(array)) {
//     myNewList = array;
//     return;
//   }
//   if (array[i] < array[j]) {
//     i++;
//     j++;
//     sortingArray(array);
//   } else {
//     [array[i], array[j]] = [array[j], array[i]];
//     i = 0;
//     j = 1;
//     sortingArray(array);
//   }
//   return myNewList;
// };

// const sortingArrayRes = sortingArray([2, 1, 3, 4, 8, 6]);
// console.log("sortingArrayRes", sortingArrayRes);
// console.log("myNewList", myNewList);

// Q => 9 helper recursive function

// const findOdd = (array) => {
//   let result = [];
//   const helperRecursive = (inputArray) => {
//     if (inputArray.length === 0) {
//       return;
//     }
//     if (inputArray[0] % 2 !== 0) {
//       result.push(inputArray[0]);
//     }
//     helperRecursive(inputArray.slice(1));
//   };
//   helperRecursive(array);
//   return result;
// };
// const findOddRes = findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log("findOddRes", findOddRes);

// Q => 10 linear Search
// const users = [
//   { username: "vikash", email: "vikash@gmail.com" },
//   { username: "ballu", email: "ballu@gmail.com" },
//   { username: "ashu", email: "ashu@gmail.com" },
// ];

// const findUser = (array, val) => {
//   for (let item of array) {
//     const { username } = item;
//     if (username === val) return true;
//   }
//   return false;
//   // return array.find(({ username }) => username === val);
// };

// const findUserRes = findUser(users, "vikash");
// console.log("findUserRes", findUserRes);

// Q =>> 11 Bubble Sort

// const bubbleSort = (array) => {
//   for (let i = array.length; i > 0; i--) {
//     console.log(i);
//     let isSwapped;
//     for (let j = 0; j < i - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         [array[j], array[j + 1]] = [array[j + 1], array[j]];
//         isSwapped = true;
//       }
//     }
//     // if (isSwapped) {
//     //   break;
//     // }
//   }
//   return array;
// };
// // [5, 3, 4, 11, 2, 8, 6, 7]
// // [8, 1, 2, 3, 4, 5, 6, 7]
// const bubbleSortRes = bubbleSort([5, 3, 4, 11, 2, 8, 6, 7]);
// console.log("bubbleSortRes", bubbleSortRes);

// Q=> 12 Selection Sort
// const selectionSort = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[min]) {
//         min = j;
//         console.log('mininside', min)
//       }
//     }
//     console.log("i", i);
//     console.log("min", min);
//     if (i !== min) {
//       [array[i], array[min]] = [array[min], array[i]];
//     }
//   }
//   return array;
// };

// const selectionSortRes = selectionSort([0, 2, 34, 22, 10, 19]);
// console.log("selectionSortRes", selectionSortRes);

// Q=> 12 Insertion Sort
// const insertionSort = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     let curr = arr[i];
//     console.log('curr', curr)
//     let j = i - 1;
//     while (j >= 0 && arr[j] > curr) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = curr;
//   }
//   return arr;
// };

// Q=> 13 find the largest repeating character of string

// const noOfString = (str) => {
//   let obj = {};
//   let max = 1;
//   let char = "";
//   const arr = str.split("");
//   for (let item of arr) {
//     obj[item] = obj[item] ? obj[item] + 1 : 1;
//   }
//   Object.keys(obj).forEach((key) => key === " " && delete obj[key]);
//   for (let key in obj) {
//     if (obj[key] > max) {
//       max = obj[key];
//       char = key;
//     }
//   }
//   return char;
// };

// const noOfStringRes = noOfString("Hello Worrrrrrrld");
// console.log("noOfStringRes", noOfStringRes);

// const insertionSortRes = insertionSort([8,2,4,1,3]);
// console.log("insertionSortRes", insertionSortRes);

// var reverseString = function (s) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let start = 0;
//   let end = s.length - 1;
//   while (start < end) {
//     const temp1 = vowels.includes(s[start]);
//     console.log(temp1);
//     const temp2 = vowels.includes(s[end]);
//     start++;
//     end--;
//     if (temp1 && temp2) {
//       [s[start], s[end]] = [s[end], s[start]];
//     }
//   }
//   return s;
// };

// console.log("reverseString", reverseString(["h", "e", "l", "l", "o"]));

// String Anagram
// hello -> llheo
// length check for both for string

const isAnagram = (string1, string2) => {
    if (string1.length !== string2.length) {
      return false;
    }
    let counter = {};
    for (let letter of string1) {
      counter[letter] = (counter[letter] || 0) + 1;
      console.log(counter[letter]);
    }
    for (let items of string2) {
      if (!counter[items]) {
        return false;
      }
      counter[items] -= 1;
    }
    return true;
  };
  
  const resisAnagram = isAnagram("hello", "llheo");
  console.log("resisAnagram", resisAnagram);
