const timeConversion = (s) => {
  // const timeZone = s.split("").at(-2) + s.split("").at(-1);
  let [hour, minute, secTz] = s.split(":");
  let seconds = secTz[0] + secTz[1];
  const timeZone = secTz[2] + secTz[3];
  if (hour === "12" && timeZone === "AM") {
    hour = "00";
  } else if (parseInt(hour) < 12 && timeZone === "PM") {
    hour = parseInt(hour) + 12;
  }
  return `${hour}:${minute}:${seconds}`;
};

// const timeConversionRes = timeConversion("12:01:00AM");
const timeConversionRes = timeConversion("07:05:45PM");

console.log("timeConversionRes", timeConversionRes);
