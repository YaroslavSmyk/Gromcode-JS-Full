function squareArray(arr) {
  debugger;
  if (!Array.isArray(arr)) {
    return null;
  }
  let result = [];
  for (let i of arr) {
    result.push(i * i);
    console.log(result);
  }
  return result;
}

squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]
