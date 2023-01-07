// function fact(x) {
//     if(x===1 ){
//         return 1
//     } else return x * fact(x - 1)

//     // if (x !== 1) {
//     //     y = (x * fact(x - 1));
//     //     return y

//     // } else return 1;

// }

// console.log("factorial", fact(5))

// let multiply = function (x, y) {
//     console.log(x*y)
// }

// let multiplyByTwo = multiply.bind(this, 2)
// multiplyByTwo(5)
// let multiplyByThree = multiply.bind(this,3)
// multiplyByThree(5)

// currying

// const Addition = (a) => {
//     return (b) => {
//         return (c) => {
//             return a + b + c
//         }
//     }
// }

// const res = Addition(5)(6)(7)

// console.log("res", res)

// const userObj = {
//     name: "Vikash",
//     age: "26"
// }

// const userInfo = (obj) => {
//     return (infoCategory) => {
//         return (section) => {
//             return `Name is ${obj[infoCategory]} and age is ${obj[section]}`
//         }
//     }
// }

// const objRes = userInfo(userObj)("name")("age")
// console.log("objRes", objRes)

// Closure

// Apply, call & Bind in JS

// let userDetails = {
//     name: "Vikash Dubey",
//     Age: 28,
//     Designation: "Software Engineer",
//     printDetails: function () {
//         console.log(this.name)
//     }
// }

// userDetails.printDetails()

// let userDetails2 = {
//     name: "Ajay Dubey",
//     Age: 30,
//     Designation: "Electrical Engineer",
// }

// // function borrowing
// userDetails.printDetails.call(userDetails2)

// let userDetails = {
//     name: "Vikash Dubey",
//     Age: 28,
//     Designation: "Software Engineer",
//     printDetails: function () {
//         console.log(this.name)
//     }
// }

// let userDetails2 = {
//     name: "Ajay Dubey",
//     Age: 30,
//     Designation: "Electrical Engineer",
// }

// let printDetails = function (state, country) {
//     console.log("bind",this.name + " " + state + " " + country)
// }
// // printDetails.call(userDetails, "Delhi", "India")

// // printDetails.apply(userDetails2, ["Varanasi", "Dubai"])

// // Bind
// let newFun = printDetails.bind(userDetails, "Delhi", "India")
// newFun()

// const FixxBuzz = () => {
//     for (var i = 1; i < 30; i++) {
//         if (i % 15 == 0) console.log("FizzBuzz");
//         else if (i % 3 == 0) console.log("Fizz");
//         else if (i % 5 == 0) console.log("Buzz");
//         else console.log(i);
//     }
// }

// FixxBuzz()

// const array = [10,20,5,9,106,56,598,865,52]
// console.log(array.sort((a,b) => a-b)[array.length - 1])

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log("fruits", fruits.reverse())

// var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

// for (var i = 1; i < Arr.length; i++)
//     for (var j = 0; j < i; j++)
//         if (Arr[i] < Arr[j]) {
//             var x = Arr[i];
//             Arr[i] = Arr[j];
//             Arr[j] = x;

//         }

// console.log(Arr);

// find unique

// const arr = [1, 2, 5, 2, 1, 8]

// const uniqueArr = []
// const len = arr.length

// let _temp;

// for (let i = 0; i < len; i++) {
//     if (uniqueArr.indexOf(arr[i]) === -1) {
//         uniqueArr.push(arr[i])
//     }
// }

// second method
// arr.sort()

// for (let i = 0; i < len; i++) {
//     if (arr[i] !== _temp) {
//         uniqueArr.push(arr[i])
//         _temp = arr[i]
//     }
// }

// console.log("uniqueArr", uniqueArr)

// third method

// let obj = {}

// for (let i of arr) {
//     obj[i] = true
// }

// console.log("obj", Object.keys(obj))

// fourth method
// const sortSet = [...new Set(arr)]

// console.log("sortSet", sortSet)

// console.log(typeof
//     (2 + "2"))
// console.log(typeof(2 - "2"))

// const func = () => {
//     // {
//     //     let i = "Vikash"
//     //     var v = "Dubey"
//     // }
//     {
//         (function () {
//             let i = "Vikash"
//             var v = "Dubey"
//         })()
//     }
//     console.log(i)
//     console.log(v)

// }

// func()

// console.log(5<6<7)
// console.log(7>6>5)

// let profile = {
//     name: "Vikash"
// }

// Object.freeze(profile)
// Object.seal(profile)

// Object.defineProperty(profile, 'age', {
//     value: 3,
//     writable: false
// })

// profile.name = "Golu Molu"
// profile.age = "36"

// console.log("profile", profile)

// console.log(Math.max(1,2,3))

// const arr = [1, 2, 3, 4, , [5, 6, 7, 55]]
// const newArr = arr.reduce((accum, curVal) =>
//      accum.concat(curVal)
// )
// console.log("newArr", newArr)
// const userName = "Vikash"
// const len = userName.length;
// // const arr = []
// let newString = ""
// const reverseString = (str) => {
//     for (let i = len - 1; i >= 0; i--) {
//         // arr.push(str[i])
//         newString += str[i]
//     }
//     return newString
//     // return arr.join("")
// }

// const res = reverseString(userName)
// console.log("res", res)

// const userName = "Hello World how is it outside"
// const arrUserName = userName.split(" ")
// const len = arrUserName.length;
// const arr = []
// let newString = ""
// const reverseStringOfSentence = (str) => {
//     for (let i = 0; i < len; i++) {
//         for (let j = str[i].length - 1; j >= 0; j--) {
//             newString += str[i][j]
//         }
//         newString += " "
//     }
//     arr.push(newString)
//     return arr.join(" ")

// }

// const res = reverseStringOfSentence(arrUserName)
// console.log("res", res)

// const arr = [1, 2, 3, 4, 5, [6, 7, 8, [22, 55]], 9]
// const len = arr.length
// const  ret = []

// var merged = [].concat.apply([], arr);
// console.log("newArr", merged)

// function flaten(ary) {
//     for (const entry of ary) {
//         if (!Array.isArray(entry)) {
//             ret.push(entry)
//         } else {
//             flaten(entry)
//         }
//     }
//     return ret
// }

// const res = flaten(arr)
// console.log("res", res)

// Sorting an Array

// let Arr = [4, 32, 22, 5, 8];
// const len = Arr.length

// const sortingArray = (array) => {

//     for (let i = 0; i < len; i++) {
//         for (let j = i + 1; j < len; j++) {
//             if (array[i] > array[j]) {
//                 temp = array[i]
//                 array[i] = array[j]
//                 array[j] = temp
//             }
//         }
//     }
//     return array

// }

// const res = sortingArray(Arr)

// console.log("res", res)

// Promise Vs Observable

// const pr = new Promise((resolve) => {
//     console.log("done")
//     setTimeout(() => {
//         resolve("yet")
//     },[2000])
// })

// pr.then((data) => {
//     console.log(data)
// })

// const obs = new Observable((observer) => {
//     console.log("obs done")
//     setTimeout(() => {
//         observer.next("yet")
//     }, [2000])
// })

// pr.subscribe((data) => {
//     console.log(data)
// })

// const arr = [{ name: "Vikash" }, { age: 29 }]

// const [name] = arr;
// console.log("name",name.name)

// function checkPalindrome(string) {
//     const len = string.length;
//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {
//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// // take input
// const string = checkPalindrome("atta");
// console.log("string", string)

// conditional rendering the value in the object
// const fName = "vikash";
// const obj = { ...(fName && { fName }) };
// console.log("obj", obj);