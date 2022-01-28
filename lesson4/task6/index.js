// const start = 5;
// const end = 100;
// let result = 0;
// debugger;
// while (start <= end) {
//     result += start;
//     if (result/5 === 0){
//     console.log(result);
//     break;
//   } if (result/2 === 0 && result/2 != 4){
//       result++;
//   } if (result/3 === 0) {
//     result--; 
//   } if (result/4 === 0) {
//     result*= result;
//   }
//   console.log(result);
// }

const start = 5;
const end = 15;
let result = 0;
debugger;
for (let i = start; i <= end; i++) {
  if (i % 5 === 0) {
    console.log(i);
    // continue;
} else if (i % 2 === 0 && i % 4 !== 0) {
    result += i;
} else if (i % 3 === 0) {
    result -= i; 
} else if (i % 4 === 0) {
    result *= i;
}
}