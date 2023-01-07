var validMountainArray = function (arr) {
  if (arr.length < 3) return false;
  let s = 0;
  let e = arr.length - 1;
  while (s + 1 < arr.length - 1 && arr[s] < arr[s + 1]) s++;
  while (e - 1 > 0 && arr[e] < arr[e - 1]) e--;
  return s === e;
};

const validMountainArrayRes = validMountainArray([0, 3, 2, 1]);
console.log("validMountainArrayRes", validMountainArrayRes);
