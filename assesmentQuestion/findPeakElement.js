// Given an array of integers target, return an array result consisting of all elements target[i] that are greater than both of their neighbors, i.e. that are target[i] > max(target[i - 1], target[i + 1]). Note, that target[0] and target[target.length - 1], which are the first and the last elements, are included by default, because they do not have two neighbors.

// Note: You are not expected to provide the most optimal solution, but a solution with time complexity not worse than O(target.length3) will fit within the execution time limit.

// Example

// For target = [1, 3, 1, 3, 2], the output should be solution(target) = [1, 3, 3, 2].

// Explanation:

// target[0] is included in the result by default, because it doesn't have two neighbors. result = [1].
// target[1] > max(target[0], target[2]), so it is included in the result. result = [1, 3].
// target[2] > max(target[1], target[3]), so it is not included in the result. result = [1, 3].
// target[3] > max(target[2], target[4]), so it is included in the result. result = [1, 3, 3].
// target[4] is included in the result by default, because it doesn't have two neighbors. result = [1, 3, 3, 2].
// For target = [1, 3, 3, 3], the output should be solution(target) = [1, 3].

// Explanation:

// target[0] is included in the result by default, because it doesn't have two neighbors. result = [1].
// target[1] > max(target[0], target[2]), so it is not included in the result. result = [1].
// target[2] > max(target[1], target[3]), so it is not included in the result. result = [1].
// target[3] is included in the result by default, because it doesn't have two neighbors. result = [1, 3].
// For target = [1, 2, 1], the output should be solution(target) = [1, 2, 1].

// Explanation:

// target[0] is included in the result by default, because it doesn't have two neighbors. result = [1].
// target[1] > max(target[0], target[2]), so it is included in the result. result = [1, 2].
// target[2] is included in the result by default, because it doesn't have two neighbors. result = [1, 2, 1].
// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] array.integer target

// The input integer array.

// Guaranteed constraints:
// 1 ≤ target.length ≤ 100,
// -100 ≤ target[i] ≤ 100.

// [output] array.integer

// The array after executing the algorithm described above.

function solution(target) {
    let result = [];
    
    for (let i = 0; i < target.length; i++) {
        if (i === 0 || i === target.length - 1 || target[i] > Math.max(target[i - 1], target[i + 1])) {
            result.push(target[i]);
        }
    }
    
    return result;
}

// Example test cases
console.log(solution([1, 3, 1, 3, 2])); // Output: [1, 3, 3, 2]
console.log(solution([1, 3, 3, 3]));   // Output: [1, 3]
console.log(solution([1, 2, 1]));      // Output: [1, 2, 1]
