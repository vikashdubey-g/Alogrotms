const grading = (grades) => {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      const dividend = grades[i] / 5;
      const roundedGrade = (parseInt(dividend) + 1) * 5;
      if (roundedGrade - grades[i] < 3) grades[i] = roundedGrade;
    }
  }
  return grades;
};

const gradingRes = grading([4, 73, 67, 38, 33]);
console.log("gradingRes", gradingRes);

// const grading = (grades) => {
//     for (let i = 0; i < grades.length; i++) {
//       if (grades[i] >= 38) {
//         const reminder = grades[i] % 5;
//         const temp = 5 - reminder;
//         if (temp <= 2) {
//           const dividend = grades[i] / 5;
//           const rounded = parseInt(dividend) + 1;
//           grades[i] = 5 * rounded;
//         }
//       }
//     }
//     return grades;
//   };
