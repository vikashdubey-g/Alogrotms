const testObj = {
  country: "USA",
  state: {
    name: "California",
    code: "CA",
    cities: {
      SanFrancisco: {
        pincode: 94101,
        population: 870000,
      },
    },
  },
  state2: {
    name: "New York",
    code: "NY",
    cities: {
      NewYorkCity: {
        pincode: 10001,
        population: 8000000,
      },
    },
  },
};

const flattenObj = (obj, parentKey = "", result = {}) => {
  for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObj(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
};
const res = flattenObj(testObj);
console.log("flattenObjRes", res);
