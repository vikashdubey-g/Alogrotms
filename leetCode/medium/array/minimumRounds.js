var minimumRounds = function (tasks) {
    const len = tasks.length;
    if (!len) return -1;
    let ctr = 0;
    const map = new Map();
    // storing the numbers frequency wise
    for (const items of tasks) {
      map[items] = map[items] + 1 || 1;
    }
  
    for (const keys in map) {
      const freq = map[keys];
      if (freq === 1) return -1; // If freq is 1 then task can't be completed
      if (freq % 3 == 0) {
        ctr += freq / 3; // increment the counter if the 3 task is completed at one times
      } else {
        ctr += freq / 3 + 1; // increment the counter for the 2th count 
      }
    }
    return ctr;
  };

  var minimumRounds = function (tasks) {
    const len = tasks.length;
    if (!len) return -1;
    let ctr = 0;
    const map = new Map();
    for (const items of tasks) {
      map[items] = map[items] + 1 || 1;
    }
    for (const keys in map) {
      if (map[keys] === 1) return -1;
      ctr += parseInt(map[keys]) / 3;
      rem = map[keys] % 3;
      if (rem !== 0) ctr++;
    }
    return ctr;
  };
  
  var minimumRounds = function (tasks) {
    const len = tasks.length;
    if (!len) return -1;
    let ctr = 0;
    const map = new Map();
    for (const items of tasks) {
      map[items] = map[items] + 1 || 1;
    }
    for (const keys in map) {
      if (map[keys] === 1) return -1;
      ctr += Math.ceil(map[keys] / 3);
    }
    return ctr;
  };
  
  const minimumRoundsRes = minimumRounds([7, 7, 7, 7, 7, 7]);
  console.log({ minimumRoundsRes });