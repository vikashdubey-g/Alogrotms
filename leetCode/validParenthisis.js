const validParenthisis = (s) => {
  debugger
  const map = { ")": "(", "}": "{", "]": "[" };
  const openBrac = [];
  for (const item of s) {
    if (item === "(" || item === "{" || item === "[") {
      openBrac.push(item);
    } else if (openBrac[openBrac.length - 1] === map[item]) {
      openBrac.pop();
    } else return false;
  }

  return openBrac.length ? false : true;
};

const validParenthisisRes = validParenthisis("(){}");
console.log("validParenthisisRes", validParenthisisRes);
