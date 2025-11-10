function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Argument must be an array"));
    }

    if (promises.length === 0) return resolve([]);
    let results = [];
    let completed = 0;
    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then((val) => {
          results[i] = val;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
}

promiseAll([
  Promise.resolve(10),
  new Promise((res) => setTimeout(() => res(20), 100)),
  30,
])
  .then(console.log) // [10, 20, 30]
  .catch(console.error);

promiseAll([Promise.resolve(10), Promise.reject("failed"), 30])
  .then(console.log)
  .catch(console.error); // "failed"

promiseAll([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]).then(
  console.log
); // [1, 2, 3]

promiseAll([
  Promise.resolve("a"),
  Promise.reject("failed"),
  Promise.resolve("b"),
])
  .then(console.log)
  .catch(console.error); // "failed"

promiseAll([1, 2, 3])
  .then((res) => console.log("without", res))
  .catch(console.error); // [1, 2, 3]

promiseAll([]).then(console.log).catch(console.error); // []

function promiseAllSettled(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Arguments must be an Array"));
    }

    if (promises.length === 0) {
      return resolve([]);
    }

    let results = [];
    let completed = 0;
    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then((value) => {
          results[i] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          results[i] = { status: "rejected", reason };
        })
        .finally(() => {
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        });
    });
  });
}

promiseAllSettled([]).then(console.log); // []



const MyPromiseUtils = {
  all(promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError("Argument must be an array"));
      }

      const results = [];
      let completed = 0;

      if (promises.length === 0) {
        return resolve([]);
      }

      promises.forEach((p, i) => {
        Promise.resolve(p)
          .then((value) => {
            results[i] = value;
            completed++;
            if (completed === promises.length) {
              resolve(results);
            }
          })
          .catch((err) => reject(err));
      });
    });
  },

  allSettled(promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError("Argument must be an array"));
      }

      const results = [];
      let completed = 0;

      if (promises.length === 0) {
        return resolve([]);
      }

      promises.forEach((p, i) => {
        Promise.resolve(p)
          .then((value) => {
            results[i] = { status: "fulfilled", value };
          })
          .catch((reason) => {
            results[i] = { status: "rejected", reason };
          })
          .finally(() => {
            completed++;
            if (completed === promises.length) {
              resolve(results);
            }
          });
      });
    });
  },

  race(promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError("Argument must be an array"));
      }

      if (promises.length === 0) return; // never settles (like native Promise.race)

      promises.forEach((p) => {
        Promise.resolve(p)
          .then(resolve)
          .catch(reject);
      });
    });
  },

  any(promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError("Argument must be an array"));
      }

      if (promises.length === 0) {
        return reject(
          new AggregateError([], "All promises were rejected (empty input)")
        );
      }

      let rejections = [];
      let rejectedCount = 0;

      promises.forEach((p, i) => {
        Promise.resolve(p)
          .then(resolve)
          .catch((err) => {
            rejections[i] = err;
            rejectedCount++;
            if (rejectedCount === promises.length) {
              reject(new AggregateError(rejections, "All promises were rejected"));
            }
          });
      });
    });
  },
};

