var lengthOfLastWord = function (s) {
    //   return s.trim().split(" ").at(-1).length;
        const arrString = s.split(" ");
        for (let i = arrString.length - 1; i >= 0; i--) {
          if (arrString[i] !== "") {
            return arrString[i].length;
          }
        }
    };
    
    const lengthOfLastWordRes = lengthOfLastWord("   fly me   to   the moon  ");
    console.log("lengthOfLastWordRes", lengthOfLastWordRes);