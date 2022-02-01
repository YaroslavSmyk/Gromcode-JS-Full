function findDivCount(a, b, n) {
  debugger;
  let result2 = 0;
    for (let i = a; i <= b; i++) {
    if (i % n === 0) {
      console.log(result2);
      result2 += 1;
      }
    }
    return result2;
  }
    findDivCount(6, 10, 2);