var mostFrequentEven = function (nums) {
    debugger;
    const evenEle = [];
    for (const item of nums) {
      if (item % 2 === 0) {
        evenEle.push(item);
      }
    }
  
    if (evenEle.length === 0) return -1;
  
    let obj = {};
    let maxEle = evenEle[0];
    for (let i = 0; i < evenEle.length; i++) {
      let curEle = evenEle[i];
      if (obj[curEle]) {
        obj[curEle]++;
      } else obj[curEle] = 1;
  
      if (obj[maxEle] < obj[curEle]) maxEle = curEle;
      if (obj[maxEle] === obj[curEle]) {
        if (maxEle > curEle) {
          maxEle = curEle;
        }
      }
    }
    return maxEle;
  };
  
  const mostFrequentEvenRes = mostFrequentEven([
    8154, 9139, 8194, 3346, 5450, 9190, 133, 8239, 4606, 8671, 8412, 6290,
  ]);
  console.log("mostFrequentEvenRes", mostFrequentEvenRes);
  