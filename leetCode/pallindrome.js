const isPalindrome = (str) => {
  let newStr = str.toLowerCase();
  let left = 0;
  let end = newStr.length - 1;

  while (left < end) {
    if (str[left] !== str[end]) return false;
    left++;
    end--;
  }
  return true;
};

const isPalindromeRes = isPalindrome("level");

console.log("isPalindromeRes", isPalindromeRes);
