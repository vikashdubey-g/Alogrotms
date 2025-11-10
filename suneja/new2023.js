function Counter() {
  var count = 0;
  this.incrementCount = function () {
    count++;
    console.log("count", count);
  };
  this.decrementCount = function () {
    count--;
    console.log("count", count);
  };
}

const count = new Counter();
count.incrementCount();
count.incrementCount();
count.decrementCount();
count.decrementCount();
count.decrementCount();
count.decrementCount();

const arr = [1, 1, 2, 1, 4, 4, 4, 4, 2, 3, 4, 5, 6];

const isPallindrom = (x) => {
  let newString = x.replace(/[^a-zA-z]/gi, "").toLowerCase();
  const len = newString.length;
  for (let i = 0; i < len; i++) {
    if (newString[i] !== newString[len - 1 - i]) {
      return false;
    }
  }
  return true;
  console.log("newString", newString);
};

const isPallindromRes = isPallindrom("race a car");
console.log("isPallindromRes", isPallindromRes);
let x = "vikash";
let y = "vikash";

const promise = new Promise((resolve, reject) => {
  if (x === y) {
    resolve(x);
  } else reject("Failed");
});

promise
  .then((res) => {
    console.log("first", `${res} promise resolves successfully`);
  })
  .catch((err) => {
    console.log("err", err);
  });

// splice()
const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const res = days.splice(0, 1);
//  res output = ["sun"];
//  days output = ["mon", "tue", "wed", "thu", "fri", "sat"];

// // slice()
// const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
// const res = days.slice(0, 1);
// // res Output = ["sun"];
// // days Output = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
