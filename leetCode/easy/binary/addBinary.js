var addBinary = function (a, b) {
  if (!a || !b) return;
  let aLen = a.length;
  let bLen = b.length;
  let max = Math.max(aLen, bLen);
  let res = "";
  let carry = 0;
  let val = 0;

  for (let i = 0; i < max; i++) {
    val = Number(a[aLen - 1 - i] || 0) + Number(b[bLen - 1 - i] || 0) + carry; // checking the number is defined or not and converting it into data type number
    carry = Math.floor(val / 2); //0,1,0,1
    res = (val % 2) + res; //1,0,1,0,1
  }

  if (carry) res = 1 + res;

  return res;
};

const addBinaryRes = addBinary("1010", "1011");
console.log("addBinaryRes", addBinaryRes);

// binary sum detail
// 0 + 1 = 1
// 1 + 0 = 1
// 1 + 1 = 0 (carry = 1)
// 0 + 0 = 0
