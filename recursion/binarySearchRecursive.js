function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
  // base condition
  if (start > end) return -1;
  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) return mid;

  if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, start, mid - 1);
  } else {
    return binarySearchRecursive(arr, target, mid + 1, end);
  }
}
