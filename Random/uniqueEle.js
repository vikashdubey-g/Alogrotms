const uniqueEle = (arr) => {
  if (!arr.length) return;
  let ctr = 0;
  for (let i = 0; i < arr.length; i++) {
    if ( arr[i] !== arr[i - 1]) {
      arr[ctr] = arr[i];
      ctr++;
    }
  }

  return ctr;
};

const res = uniqueEle([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log("res", res);
