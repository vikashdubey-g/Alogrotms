const fromCenter = (str, left, right) => {
  let i = 0;
  while (str[left - i] && str[left - i] === str[right + i]) {
    console.log("first", left, i, str[left - i], str[right + i]);
    i++;
  }
  i--;
  return str.slice(left - i, right + i + 1);
};

var longestPalindrome = function (s) {
  if (s.length < 1 || s === null) return "";
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    let oddPalindrome = fromCenter(s, i, i);
    let evenPalindrome = fromCenter(s, i - 1, i);
    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome;
    }
    if (evenPalindrome.length > longest.length) {
      longest = evenPalindrome;
    }
  }
  return longest;
};



const longestPalindromeRes = longestPalindrome("babad");
console.log("longestPalindromeRes", longestPalindromeRes);