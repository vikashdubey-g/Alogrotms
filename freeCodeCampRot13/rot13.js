function rot13(str) {
  const strArray = str.split("");
  let asciiVal;
  for (let i = 0; i < strArray.length; i++) {
    asciiVal = strArray[i].charCodeAt(); // getting the ascii value of the each characters
    if (asciiVal >= 65 && asciiVal <= 90) {
      // checking the ascii values only for the alphabeticals characters
      if (asciiVal > 77) asciiVal -= 13;
      else asciiVal += 13;
      strArray[i] = String.fromCharCode(asciiVal); // putting the value by modifying the characters
    }
  }
  return strArray.join("");
}

const rot13Res = rot13("SERR CVMMN!");

console.log("rot13Res", rot13Res);
