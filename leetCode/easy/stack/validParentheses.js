var isValid = function (s) {
  if (!s) return;
  const map = { "(": ")", "[": "]", "{": "}" };
  const openBracList = ["(", "[", "{"];
  const stack = [];
  for (const items of s) {
    if (openBracList.includes(items)) {
      stack.push(items);
    } else if (map[stack.pop()] !== items) {
      return false;
    }
  }
  return stack.length ? false : true;
};

const isValidRes = isValid("()[]{}");
console.log("isValidRes", isValidRes);
