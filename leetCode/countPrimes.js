// const isPrime = (n) => {
//   debugger;
//   if (n === 2) {
//     return true;
//   }
//   if (n < 2 || !(n % 2)) {
//     return false;
//   }

//   for (let i = 3; i <= Math.sqrt(n); i++, i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// var countPrimes = function (n) {
//   debugger;
//   let ctr = 0;
//   for (let i = 0; i <= n; i++) {
//     const res = isPrime(i);
//     if (res) {
//       ctr++;
//     }
//   }
//   return ctr;
// };

// var countPrimes = function (n) {
//   const boolArr = [];
//   for (let i = 2; i < n; i++) {
//     boolArr[i] = true;
//   }

//   for (let i = 2; i * i < n; i++) {
//     if (!boolArr[i]) continue;
//     for (let j = i * i; j < n; j += i) {
//       boolArr[j] = false;
//     }
//   }

//   let ctr = 0;
//   for (let i = 0; i < boolArr.length; i++) {
//     if (boolArr[i]) {
//       ctr++;
//     }
//   }
//   return ctr;
// };

var countPrimes = function (n) {
    if (n <= 2) return 0;
    const bool = [];
    for (let i = 2; i < n; i++) {
      bool[i] = false;
    }
    const limit = parseInt(Math.sqrt(n));
    for (let i = 2; i <= limit; i++) {
      if (bool[i] === false) {
        for (let j = i * i; j < n; j += i) {
          bool[j] = true;
        }
      }
    }
  
    let ctr = 0;
    for (let i = 2; i < n; i++) {
      if (bool[i] === false) {
        ctr++;
      }
    }
  
    console.log("bool", bool);
  
    return ctr;
  };
  
  const countPrimesRes = countPrimes(10);
  console.log("countPrimesRes", countPrimesRes);
  