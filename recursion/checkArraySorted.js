// brute force approach same time complexity O(n) but better space complexity O(1)

function isArraySorted(arr) {
  if (arr.length <= 2) return true;

  //   determine sort direction
  let i = 1;

  while (i < arr.length && arr[i] === arr[i - 1]) i++;

  if (i === arr.length) return true; // all elements are equal

  const isAscending = arr[i] > arr[i - 1];

  for (; i < arr.length; i++) {
    if (isAscending && arr[i] < arr[i - 1]) return false;
    if (!isAscending && arr[i] > arr[i - 1]) return false;
  }
  return true;
}

// recursive approach space and time complexity: O(n)
function isArraySortedRecursive(arr, index = 1, direction = 0) {
  if (index >= arr.length - 1) return true; // base case: reached the end of the array

  if (direction === 0) {
    // determine sort direction
    if (arr[index] > arr[index - 1]) {
      direction = 1; // ascending
    } else if (arr[index] < arr[index - 1]) {
      direction = -1; // descending
    } else {
      return isArraySortedRecursive(arr, index + 1, direction); // equal elements, move to next
    }
  }

  if (direction === 1 && arr[index] > arr[index + 1]) return false; // array is not sorted in ascending order
  if (direction === -1 && arr[index] < arr[index + 1]) return false; // array is not sorted in descending order

  return isArraySortedRecursive(arr, index + 1); // recursive case: check the next pair
}
