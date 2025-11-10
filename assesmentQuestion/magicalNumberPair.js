// In a land where numbers hold magical powers, there exists a magical gemstone with unique properties. This gemstone can magically transform one number into another by swapping no more than two of its digits. You have come across an ancient scroll that lists an array of these enchanted numbers, numbers. Your task is to determine how many distinct pairs (i, j) exist, such that 0 ≤ i < j < numbers.length, and one number in the pair can be transformed into the other by manipulating its digits, swapping at most two.

// Note: If no swap is needed and two numbers are already equal, they should also be counted as magical pairs.

// Example

// For numbers = [1, 23, 156, 1650, 651, 165, 32], the output should be solution(numbers) = 3.

// The number 23 at numbers[1] can transform into 32 at numbers[6] through a digit exchange of its two digits.
// The number 156 at numbers[2] can transform into 651 at numbers[4] by switching 6 and 1.
// Similarly, 156 at numbers[2] can transform into 165 at numbers[5] by swapping 6 and 5.
// For numbers = [123, 321, 123], the output should be solution(numbers) = 3.

// All eligible mystical transformations are:

// 321 at numbers[1] becomes 123 at numbers[0] by exchanging 1 and 3.
// 123 at numbers[2] is naturally the same as 123 at numbers[0].
// 123 at numbers[2] becomes 321 at numbers[1] by exchanging 3 and 1.
// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] array.integer numbers

// An array consisting of positive integers known for their enchanted properties.

// Guaranteed constraints:
// 1 ≤ numbers.length ≤ 104,
// 1 ≤ numbers[i] ≤ 109.

// [output] integer

// The total number of magical pairs whereby one number can be derived from another by swapping no more than two of its digits


function solution(numbers) {
  function normalize(num) {
    const str = num.toString().split("").sort().join("");
    return str;
  }

  let seen = new Map();
  let count = 0;

  for (const num of numbers) {
    key = normalize(num);
    if (seen[key]) {
      count += seen[key];
      seen[key] = count;
    } else {
      seen[key] = 1;
    }
  }
  return count;
}

// Example test cases
console.log(solution([1, 23, 156, 1650, 651, 165, 32])); // Output: 3
console.log(solution([123, 321, 123])); // Output: 3
