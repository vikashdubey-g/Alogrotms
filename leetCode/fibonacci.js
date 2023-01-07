const fibonacci = (n) => {
  if (n === 0 || n === 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const fibonacciRes = fibonacci(4);
console.log("fibonacciRes", fibonacciRes);
