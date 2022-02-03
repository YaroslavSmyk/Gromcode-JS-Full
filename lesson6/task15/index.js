const includes = (arr, num) => {
  debugger;
//   let result = '';
//   for (let i = 0; i <= arr; i++){
//       result += i;
//       if (i === num) {
//         return true;
//         continue;
//   } else {
//     return false;
//   }
// }

  for (let i of arr) {
    if (i === num) {
     return true;
    }
  }
  return false;
};

// examples
console.log(includes([1, 4, 8, 3], 3)); // ==> true
console.log(includes([1, 4, 8, 3], 5)); // ==> false








// const includes = (arr, num) => {
//   debugger;
//   arr.includes(num);
// };

// includes([1, 4, 8, 3], 3); // ==> true
// includes([1, 4, 8, 3], 5); // ==> false
