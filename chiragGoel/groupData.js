// Grouping the data
// const getGroupData = (inputData) => {
//   const outputData = {};
//   for (const item of inputData) {
//     if (outputData[item.key]) {
//       outputData[item.key].push(item);
//     } else {
//       outputData[item.key] = [item];
//     }
//   }
//   return outputData;
// };

// const groupDataRes = getGroupData(obj);

// console.log("groupDataRes", groupDataRes);

// const res = obj.reduce((acc, curr) => {
//   if (acc[curr.key]) {
//     acc[curr.key].push(curr);
//   } else {
//     acc[curr.key] = [curr];
//   }
//   return acc;
// }, {});

// function groupBy(arr) {
//     return arr.reduce((value, item) => {
//         const { key, data } = item;
//         if (!value[key]) {
//             value[key] = [];
//         }
//         value[key].push({ key, data });
//         return value;
//     }, {});
// }