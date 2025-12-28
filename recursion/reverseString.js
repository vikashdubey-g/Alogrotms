function reverseString(str, i = str.length - 1, res = "") {
  if (i < 0) return res;
  res += str[i];
  return reverseString(str, i - 1, res);
}

console.log("str", reverseString("vikash"))