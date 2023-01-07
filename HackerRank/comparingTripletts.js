function compareTriplets(a, b) {
  const len = a.length - 1;
  let alicePoints = 0;
  let bobPoints = 0;
  for (let i = 0; i <= len; i++) {
    if (a[i] > b[i]) {
      alicePoints++;
    }
    if (b[i] > a[i]) {
      bobPoints++;
    }
  }

  return [alicePoints, bobPoints];
}

console.log("compareTriplets", compareTriplets([18, 28, 30], [99, 16, 8]));
