const replaceElements = (arr) => {
  if (!arr.length) return;
  let maxNum = arr[arr.length - 1];
  arr[arr.length - 1] = -1;

  for (let i = arr.length - 2; i >= 0; i--) {
    let currEle = arr[i];
    // console.log('currEle', currEle)
    arr[i] = maxNum;

    maxNum = Math.max(currEle, maxNum);
  }
  // let rightVal = -1;
  // for (let i = arr.length - 1; i > 0; i--) {
  //   newRightVal = Math.max(rightVal, arr[i]);
  //   arr[i] = rightVal;
  //   rightVal = newRightVal;
  // }
  return arr;
};

// const replaceElements = (arr) => {
//     if (!arr.length) return;
  
//     let maxElement;
//     for (let i = 0; i < arr.length; i++) {
//       maxElement = arr[i + 1];
//       for (let j = i + 1; j < arr.length; j++) {
//         maxElement = Math.max(arr[j], maxElement);
//       }
//       arr[i] = maxElement;
//       if (i === arr.length - 1) arr[arr.length - 1] = -1;
//     }
  
//     return arr;
//   };
  

const res = replaceElements([17, 18, 5, 4, 6, 1]);
console.log("res", res);
