var numberOfSteps = function (num) {
    let ctr = 0;
    while (num) {
      if (num % 2 === 0) {
        num = num / 2;
      } else {
        num = num - 1;
      }
      ctr++;
    }
    return ctr;
  };
  
  const numberOfStepsRes = numberOfSteps(123);
  console.log("numberOfStepsRes", numberOfStepsRes);

  var countOperations = function (num1, num2) {
    let i = 0;
    while (num1 && num2) {
      i++;
      if (num1 >= num2) {
        num1 -= num2;
      } else num2 -= num1;
    }
    return i;
  };
  
  const countOperationsRes = countOperations(2, 3);
  console.log("countOperationsRes", countOperationsRes);