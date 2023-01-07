// [3, 2, 3]
var majorityElement = function (nums) {
    let majority = nums[0];
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
      const currEle = nums[i];
      if (obj[currEle]) {
        obj[currEle]++;
      } else obj[currEle] = 1;
  
      if (obj[currEle] > obj[majority]) majority = currEle;
      return majority;
    }
    // debugger;
    // let ele = nums[0];
    // let obj = {};
    // for (let i = 0; i < nums.length; i++) {
    //   const curEle = nums[i];
    //   if (obj[curEle]) {
    //     obj[curEle]++;
    //   } else obj[curEle] = 1;
  
    //   if (obj[ele] < obj[curEle]) ele = curEle;
    // }
    // return {ele , oc:obj[ele] };
  };
  // var majorityElement = function (nums) {
  //   debugger
  //   const totalEle = nums.length;
  //   let map = new Set();
  //   for (const item of nums) {
  //     if (!map.has(item)) {
  //       map[item] = 1;
  //     } else {
  //       map[item] += 1;
  //       console.log("second");
  //       console.log("first", map[item]);
  //     }
  //   }
  //   return map;
  // };
  
  // var majorityElement = function (nums) {
  //   const totalEle = nums.length;
  //   let majority = nums[0];
  //   let count = 1;
  //   for (let i = 0; i < totalEle; i++) {
  //     if (nums[i] === majority) {
  //       count += 1;
  //     } else {
  //       count -= 1;
  //       if (count == 0) {
  //         majority = nums[i];
  //         count = 1;
  //       }
  //     }
  //   }
  //   return majority
  // };
  
  const majorityElementRes = majorityElement([3, 2, 3]);
  console.log("majorityElementRes", majorityElementRes);
  //calculate the maximum occuring element in array
  
  function getMaxOcurrences(arr = []) {
    let item = arr[0];
    let ocurrencesMap = {};
  
    for (let i in arr) {
      const current = arr[i];
  
      if (ocurrencesMap[current]) ocurrencesMap[current]++;
      else ocurrencesMap[current] = 1;
  
      if (ocurrencesMap[item] < ocurrencesMap[current]) item = current;
    }
  
    return {
      item,
      ocurrences: ocurrencesMap[item],
    };
  }
  
  const getMaxOcurrencesRes = getMaxOcurrences([
    "hello",
    "world",
    "hello",
    "again",
  ]);
  console.log("getMaxOcurrencesRes", getMaxOcurrencesRes);
  