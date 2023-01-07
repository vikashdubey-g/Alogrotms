var canCompleteCircuit = function (gas, cost) {
    const gasLen = gas.length;
    const costLen = cost.length;
    if (!gasLen || !costLen || gasLen !== costLen) return -1; // length of both the array should be equal
    let curr = 0;
    let totalFuel = 0,
      totalCost = 0,
      start = 0;
    for (let i = 0; i < gasLen; i++) { // calculating the sum of both the array
      totalFuel += gas[i];
      totalCost += cost[i];
    }
    if (totalFuel < totalCost) return -1; // if fuel is less than cost then it can't be happen
  
    for (let i = 0; i < gasLen; i++) {
      curr += gas[i] - cost[i];
      if (curr < 0) { // always current fuel should be in positive to travel from one place to another
        start = i + 1; // increment the index value
        curr = 0;
      }
    }
    return start;
  };
  
  const canCompleteCircuitRes = canCompleteCircuit(
    [1, 2, 3, 4, 5],
    [3, 4, 5, 1, 2]
  );
  console.log("canCompleteCircuitRes", canCompleteCircuitRes);