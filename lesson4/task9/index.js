let sum = 0;
debugger;
for (let i = 1; i <= 1000; i++) {
  sum += i;
}
const div = sum / 1234;
const a = Math.trunc(div);
const b = sum % 1234;
console.log("b:", b);
console.log(a > b ? true: false);
