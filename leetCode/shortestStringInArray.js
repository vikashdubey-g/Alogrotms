const shortestString = (arr) => {
  let shortestWord = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (shortestWord.length > arr[i].length) {
      shortestWord = arr[i];
    }
  }
  return shortestWord;
};

const shortestStringRes = shortestString([
  "vikash",
  "vikashdubey",
  "howareyou",
  "nnjkbjbjkbkjbkjbbjbb", "nk"
]);

console.log("shortestStringRes", shortestStringRes);