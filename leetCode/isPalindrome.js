// var isPalindrome = function (s) {
//     const newS = s.replace(/[^0-9a-z]/gi, "").toLowerCase();
//     const len = newS.length;
//     for (let i = 0; i < len / 2; i++) {
//       if (newS[i] !== newS[len - 1 - i]) {
//         return false;
//       }
//     }
//     return true;
//   };

//   const isPalindromeRes = isPalindrome("A man, a plan, a canal: Panama");

//   console.log("isPalindromeRes", isPalindromeRes);
const isLetter = (code) => {
  if (
    (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
  ) {
    return true;
  } else return false;
};

var toLowerCase = function (code) {
  if (code >= 65 && code <= 90) {
    return code + 32;
  } else {
    return code;
  }
};

var isPalindrome = function (s) {
  debugger;
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    let startEleCode = s.charCodeAt(start);
    let endEleCode = s.charCodeAt(end);
    if (!isLetter(startEleCode)) {
      start++;
      continue;
    }
    if (!isLetter(endEleCode)) {
      end--;
      continue;
    }

    if (toLowerCase(startEleCode) !== toLowerCase(endEleCode)) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

const isPalindromeRes = isPalindrome("A man, a plan, a canal: Panama");
console.log("isPalindromeRes", isPalindromeRes);
