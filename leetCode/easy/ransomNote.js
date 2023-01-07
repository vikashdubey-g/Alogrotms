var canConstruct = function (ransomNote, magazine) {
  let map1 = new Map();
  let map2 = new Map();
  for (const item of ransomNote) {
    map1[item] = map1[item] + 1 || 1;
  }
  for (const item of magazine) {
    map2[item] = map2[item] + 1 || 1;
  }
  for (const key in map1) {
    if (!map2[key]) return false;
    if (map1[key] && map2[key]) {
      if (map1[key] > map2[key]) {
        return false;
      }
    }
  }

  return true;
};



// var canConstruct = function (ransomNote, magazine) {
//   let map1 = new Map();
//   let map2 = new Map();
//   for (const item of ransomNote) {
//     map1[item] = map1[item] + 1 || 1;
//   }
//   for (const item of magazine) {
//     map2[item] = map2[item] + 1 || 1;
//   }
//   for (const key in map1) {
//     if (!map2[key] || map1[key] > map2[key]) return false;
//   }

//   return true;
// };

// var canConstruct = function (ransomNote, magazine) {
//   debugger
//   let map = new Map();
//   for (const item of magazine) {
//     map[item] = map[item] + 1 || 1;
//   }
//   for (const item of ransomNote) {
//     if (!map[item]) {
//       return false;
//     }
//     map[item]--;
//   }
//   return true;
// };

// var canConstruct = function (ransomNote, magazine) {
//   for (let i = 0; i < ransomNote.length; i++) {
//     let matchingIndex = magazine.indexOf(ransomNote[i]);
//     if (matchingIndex === -1) return false;
//     magazine = magazine.substring(0, i) + magazine.substring(i + 1);
//     console.log('magazine', magazine)
//   }
//   return true;
// };


const canConstructRes = canConstruct(
  "bg",
  "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"
);
console.log("canConstructRes", canConstructRes);
