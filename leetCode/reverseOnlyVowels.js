// const vowels = ["a", "e", "i", "o", "u"];
// const reverseOnlyVowelsOfString = (str) => {
//   const arr = str.split("");
//   let start = 0;
//   let end = arr.length - 1;
//   while (start < end) {
//     while (start < end) {
//       if (!vowels?.includes(arr[start])) {
//         start++;
//       } else {
//         break;
//       }
//     }
//     while (start < end) {
//       if (!vowels?.includes(arr[end])) {
//         end--;
//       } else {
//         break;
//       }
//     }

//     [arr[start], arr[end]] = [arr[end], arr[start]];
//     start++;
//     end--;
//   }
//   return arr.join("");
// };

// const reverseOnlyVowelsOfStringRes = reverseOnlyVowelsOfString("hello");
// console.log("reverseOnlyVowelsOfStringRes", reverseOnlyVowelsOfStringRes);

// const vowels = ["a", "e", "i", "o", "u","A","E","I","O","U"];
// const reverseOnlyVowelsOfString = (str) => {
//   const arr = str.split("");
//   let start = 0;
//   let end = arr.length - 1;
//   while (start < end) {
//     if (!vowels.includes(arr[start])) {
//       start++;
//     }
//     if (!vowels.includes(arr[end])) {
//       end--;
//     }
//     if (vowels.includes(arr[start]) && vowels.includes(arr[end])) {
//       [arr[start], arr[end]] = [arr[end], arr[start]];
//       start++;
//       end--;
//     }
//   }
//   return arr.join("");
// };

// const reverseOnlyVowelsOfStringRes = reverseOnlyVowelsOfString("aA");
// console.log("reverseOnlyVowelsOfStringRes", reverseOnlyVowelsOfStringRes);