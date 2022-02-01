function getPrimes(num) {
  debugger;
  for (let i = 2; i <= num; i++) {
    let result = 0;
    for (let k = 2; k <= i; k++) {
      if (i % k !== 0) {
        continue;
      }
      result += 1;
    }
    if (result === 1) {
      console.log(i);
    }
  }
}
getPrimes(30);
