function getSpecialNumbers(from, to) {
  debugger;
  let result = [];
  for (let i = from; i <= to; i++) {
    if (i % 3 === 0) {
      result.push(i);
      console.log(result);
    }
  }
  return result;
}

// examples
getSpecialNumbers(1, 10); // ==> [3, 6, 9]
getSpecialNumbers(-10, 10); // ==> [-9, -6, -3, 0, 3, 6, 9]
getSpecialNumbers(1, 2); // ==> [ ]
