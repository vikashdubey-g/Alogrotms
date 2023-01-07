function outer() {
  let a = 5;
  return function inner() {
    return a;
  };
}

const outerRes = outer();
console.log("outerRes", outerRes());
