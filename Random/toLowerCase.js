const toLowerCase = (code) => {
  if (65 >= code && code >= 90) {
    return String.fromCharCode(code + 32);
  } else return code;
};

const s = "A";
const toLowerCaseRes = toLowerCase(s.charCodeAt(0));
console.log("toLowerCaseRes", toLowerCaseRes);
