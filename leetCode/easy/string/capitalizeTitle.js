var capitalizeTitle = function (title) {
  if (!title) return;
  const nums = title.split(" "); // converting the sentence's word into array element
  const len = nums.length;
  let res = "";
  let i = 0;
  if (nums[0].length === 1) {
    // checking for the first word of the sentence
    res += nums[0].toLowerCase();
    i = 1;
  }

  for (i; i < len; i++) {
    const currEle = nums[i];
    if (res.length >= 1) res += " "; // adding the space between two words
    if (currEle.length >= 3) {
      // checking the current element length
      for (let j = 0; j < currEle.length; j++) {
        if (j === 0) {
          res += currEle.charAt(0).toUpperCase(); // converting first letter of word into uppercase
        } else {
          res += currEle[j].toLowerCase(); // and all other words into lowercase
        }
      }
    } else {
      res += currEle.toLowerCase();
    }
  }

  return res;
};

const capitalizeTitleRes = capitalizeTitle("L hV");
//console.log("capitalizeTitleRes", capitalizeTitleRes);
