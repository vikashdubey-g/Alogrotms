var getChar = function (num) {
  var start = "A".charCodeAt(0);
  return String.fromCharCode(start + num - 1);
};

var convertToTitle = function (columnNumber) {
  let num = columnNumber;
  let tmp = 0;
  let res = "";
  while (num > 0) {
    tmp = num % 26;
    console.log("tmp", tmp);
    if (tmp === 0) tmp = 26;
    res = getChar(tmp) + res;
    num = (num - tmp) / 26;
    console.log("num", num);
  }
  return res;
};

const convertToTitleRes = convertToTitle(1);
console.log("convertToTitleRes", convertToTitleRes);
