// 2, 3, 5, 7, 11, 13;
const isPrime = (num) => {
  if (num === 2) {
    return true;
  }
  if (!Number.isInteger(num) || num < 2 || !(num % 2)) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(num); i++, i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const isPrimeRes = isPrime(9);
console.log("isPrimeRes", isPrimeRes);

for (let i = 0; i <= 10; i++) {
  if (isPrime(i)) {
    console.log("i", i);
  }
}
