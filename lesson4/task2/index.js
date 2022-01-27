const m = 6;
const n = 11;
let d = m;
let result = 1;
debugger;
do {
  if (d % 2 === 1) {
    result *= d;
  }
  d++;
} while (d <= n);
console.log(result);