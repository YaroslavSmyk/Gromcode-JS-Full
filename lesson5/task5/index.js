function getSum(firstNum, lastNum) {
  let result = 0;
  for (let i = firstNum; i <= lastNum; i++) {
    debugger;
      if (i % 2 === 0) {
        result += i;
      }
    }
    console.log(result);
      return result;
}
getSum(2, 4);