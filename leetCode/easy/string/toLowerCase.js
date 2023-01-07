var toLowerCase = function (s) {
  if (!s) return;
  let res = "";
  const length = s.length;
  for (let i = 0; i < length; i++) {
    const currEle = s[i];
    if (currEle === currEle.toUpperCase()) {
      res += currEle.toLowerCase();
    } else res += currEle;
  }
  return res;
};

const toLowerCaseRes = toLowerCase("LeovelY");
console.log("toLowerCaseRes", toLowerCaseRes);
