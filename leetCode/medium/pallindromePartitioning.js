const isPalindrome = (s, start, end) => {
  while (start < end) {
    if (s[start] !== s[end]) return false;
    start++;
    end--;
  }
  return true;
};

var partition = function (s) {
  const res = [];
  const rec = (i, s, slate) => {
    if (i === s.length) {
      res.push(slate.slice());
      return;
    }

    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        slate.push(s.slice(i, j + 1));
        rec(j + 1, s, slate);
        slate.pop();
      }
    }
  };
  rec(0, s, []);
  return res;
};

const partitionRes = partition("aab");
console.log("partitionRes", partitionRes);
