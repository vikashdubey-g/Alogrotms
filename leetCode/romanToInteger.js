const key = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  const arr = [];
  length = s.length;
  for (let i = 0; i < length; i++) {
    if (key[s[i]] < key[s[i + 1]]) {
      arr.push(key[s[i + 1]] - key[s[i]]);
      i++;
      continue;
    } else arr.push(key[s[i]]);
  }
  return arr.reduce((acc, curr) => acc + curr);
};

console.log(romanToInt("I"));
console.log(romanToInt("III"));
romanToInt("IV");
romanToInt("IX");
romanToInt("LVIII");
romanToInt("MCMXCIV");
romanToInt("MMMCMXCIX");
