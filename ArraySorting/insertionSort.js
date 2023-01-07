// story always start with second element
const inertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const curEle = arr[i];
    let j = i - 1;
    // swapping only happens when left element is greater than right element
    while (j >= 0 && arr[j] > curEle) {
      arr[j + 1] = arr[j];
      j--;
    }
    // storing the current value at previous index
    arr[j + 1] = curEle;
  }
  return arr;
};

const inertionSortRes = inertionSort([8, 2, 4, 1, 3]);
console.log("inertionSortRes", inertionSortRes);
