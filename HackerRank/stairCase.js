const stairCase = (n) => {
  let has = "#";
  let space = " ";
  for (let i = 1, j = n - 1; i <= 4; i++, j--) {
    console.log(`${space.repeat(j)}${has.repeat(i)}`);
  }
};

const stairCaseRes = stairCase(4);
console.log("stairCaseRes", stairCaseRes);
