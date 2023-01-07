var duplicateZeros = function (arr) {
  // counting the number of zeroes
  let zeroCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) zeroCount++;
  }

  // swapping the element
  const addEle = (arr, i, j) => {
    if (j < arr.length) {
      arr[j] = arr[i];
    }
  };

  // another loop for duplicating the zeroes
  let start = arr.length - 1;
  let end = arr.length + zeroCount - 1;
  while (start !== end) {
    addEle(arr, start, end--);
    if (!arr[start]) {
      addEle(arr, start, end--);
    }
    start--;
  }

  return arr;
};

const duplicateZerosRes = duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);
console.log("duplicateZerosRes", duplicateZerosRes);
