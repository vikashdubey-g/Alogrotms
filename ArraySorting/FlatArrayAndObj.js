const inputObj = {
    name: "Vikash",
    age: 30,
    address: {
      flatNo: 31,
      city: "Chennai",
      contact: { mob: 9807882311, email: "v.dubey2311@gmail.com" },
    },
  };
  
  const flatObj = (input) => {
    const obj = {};
    const objKeys = Object.keys(input);
    for (const key of objKeys) {
      if (typeof input[key] === "object") {
        Object.assign(obj, flatObj(input[key]));
      } else {
        obj[key] = input[key];
      }
    }
    return obj;
  };
  
  const flatObjRes = flatObj(inputObj);
  console.log("flatObjRes", flatObjRes);
  
  const inputArr = [1, 2, 3, [4, 5, [6, 7, 8, [9, 10, 11]]]];
  
  const flatArr = (arr) => {
    let res = [];
    for (const items of arr) {
      if (Array.isArray(items)) {
        res = res.concat(flatArr(items));
      } else {
        res = [...res, items];
      }
    }
    return res;
  };
  
  const flatArrRes = flatArr(inputArr);
  console.log("flatArrRes", flatArrRes);