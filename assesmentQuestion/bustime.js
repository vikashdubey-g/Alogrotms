// Imagine you are managing a city's transit archive looking back at past bus departure records. You are provided with an array departure_times which lists when buses departed throughout the day. Your job is to determine how many minutes have passed since the most recent bus left the station. If no bus has departed by the current time, return -1.

// Time is formatted as strings in HH:MM within a 24-hour clock. All departures are ordered chronologically.

// Assume that a bus scheduled to leave exactly at current_time has not yet departed.

// Note: You are not expected to provide the most optimal solution, but a solution with time complexity not worse than O(departure_times.length × MINUTES_IN_DAY) will fit within the execution time limit.

// Example

// For departure_times = ["12:30", "14:00", "19:55"] and current_time = "14:30", the output should be solution(departure_times, current_time) = 30.

// Explanation:
// At "14:30", the last bus left at "14:00", so it was 30 minutes ago.

// For departure_times = ["00:00", "14:00", "19:55"] and current_time = "00:00", the output should be solution(departure_times, current_time) = -1.

// Explanation:
// No buses have left before "00:00" (the bus scheduled at "00:00" hasn't departed yet), resulting in -1.

// For departure_times = ["12:30", "14:00", "19:55"] and current_time = "14:00", the output should be solution(departure_times, current_time) = 90.

// Explanation:
// At "14:00", the last departure was at "12:30" because the "14:00" bus hasn't left, making it 90 minutes ago.

// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] array.string departure_times

// An array of strings detailing bus departures, formatted as HH:MM.

// Guaranteed constraints:
// 3 ≤ departure_times.length ≤ 100.

// [input] string current_time

// The present time in HH:MM format.

// [output] integer

// The length of time in minutes since the last bus departed or -1 if none have left before the current time.




function solution(departure_times, current_time) {
  let lastDepart = -1;
  function timeToMinute(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  }
  const currentMinute = timeToMinute(current_time);

  for (let time of departure_times) {
    departMinute = timeToMinute(time);
    if (departMinute < currentMinute) {
      lastDepart = departMinute;
    } else {
      break;
    }
  }
  return lastDepart === -1 ? -1 : currentMinute - lastDepart;
}

// // Example test cases
console.log(solution(["12:30", "14:00", "19:55"], "14:30")); // Output: 30
console.log(solution(["00:00", "14:00", "19:55"], "00:00")); // Output: -1
console.log(solution(["12:30", "14:00", "19:55"], "14:00"));
