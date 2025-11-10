function memorizeOne(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args); // Creating unique keys because objects are reference type
    if (key in cache) {
      console.log("Using memoized result");
      return cache[key];
    } else {
      console.log("Calculating result");
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}
