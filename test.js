// const people = [
//     { id: 1, name: 'ser' },
//     { id: 5, name: 'alex' },
//     { id: 300, name: 'brittany' }
// ];

// const idToRemove = "alex";

// const filteredPeople = people.filter((item) => item.name !== idToRemove);

// console.log("people", filteredPeople)

// infinite currying

// const add = (a) => {
//   return (b) => {
//     if (b) return add(a + b);
//     return a;
//   };
// };

// const res = add(2)(4)(5)();
// console.log("res", res);

// const calc = {
//   total: 0,
//   add(a) {
//     this.total += a;
//     return this;
//   },
//   multiply(a) {
//     this.total *= a;
//     return this;
//   },
//   subtract(a) {
//     this.total -= a;
//     return this;
//   },
// };

// const result = calc.add(10).multiply(5).subtract(30).add(10);
// console.log("result", result.total);

// var x = 21;

// function fun() {
//   console.log(x);
//   var x = 20;
// }
// fun();

// multiply number values of object by 2

// const num = {
//   a: 100,
//   b: 200,
//   c: "Hello!",
// };

// const multiplyFun = (obj) => {
//   for (key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// };

// multiplyFun(num);

// console.log("num", num);

// const user = {
//   name: "Vicky",
//   age: 26,
// };

// const strObj = JSON.parse(JSON.stringify(user))

// console.log("user",strObj);

// console.log([..."vicky"])

// function getItems(fruitList, favoriteFruit, ...args) {
//   return [...fruitList, ...args, favoriteFruit];
// }

// console.log(getItems(["banana", "apple"], "poor", "orange"));

// let c = { greeting: "Hey!" };
// let d;
// d = c;
// c.greeting = "Hello";
// console.log(d.greeting)

// false because of different memory space
// console.log({a:1} == {a:1})
// console.log({a:1} === {a:1})

// Ques-1: Pangram String checker
// The quick brown fox jumps over a lazy dog

// const checkPangram = (str) =>  {
// cons
// }

// checkPangram()

// function convert12to24(fullTime) {
//   const [time, zone] = fullTime.split(" ");
//   let [hour, minute] = time.split(":");
//   if (hour === "12") hour = "00";
//   //   console.log("hour", hour);
//   if (zone === "PM") hour !== "00" ? (hour = parseInt(hour) + 12) : hour;
//   return `${hour}:${minute}`;
// }

// const res = convert12to24("02:40 PM");
// console.log(res);
// console.log(convert12to24("12:42 PM"));
// console.log(convert12to24("04:09 PM"))
// console.log(convert12to24("12:00 AM"))

// least recently used cache
// function myFun() {
//   console.log("a", a);
//   let a = 5;
// }
// myFun();

const promise = new Promise((resolve, reject) => {
  const x = "vikash";
  const y = "vikash";
  if (x === y) {
    resolve("show me");
  } else reject("rjected");
});

promise.then((res) => console.log(res,'resolve')).catch((err) => console.log(err,'reject'))