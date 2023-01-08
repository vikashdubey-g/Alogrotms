var largestNumber = function (nums) {
    const sorted = nums.sort((a, b) => {
      const ab = a.toString() + b.toString();
      const ba = b.toString() + a.toString();
      return ba - ab;
    });
    const joined = sorted.join("");
    if (parseInt(joined) === 0) {
      return "0";
    } else return joined;
  };
  
  const largestNumberRes = largestNumber([3, 30, 34, 5, 9]);
  console.log("largestNumberRes", largestNumberRes);