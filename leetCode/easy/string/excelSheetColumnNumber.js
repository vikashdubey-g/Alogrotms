var titleToNumber = function (columnTitle) {
    if (!columnTitle) return;
    let res = 0;
    for (let i = 0; i < columnTitle.length; i++) {
      res *= 26;
      res += columnTitle.charCodeAt(i) - "A".charCodeAt() + 1;
    }
    return res;
  };
  
  const titleToNumberRes = titleToNumber("A");
  console.log("titleToNumberRes", titleToNumberRes);
  