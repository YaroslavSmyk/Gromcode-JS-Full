function swap(numbers) {
  const [start, ...rest] = numbers;
  return [...rest, start];
}

function swapManual(numbers) {
  debugger;
  let result = [...numbers];
  result.push(numbers[0]);
  result.shift(result[0]);
  console.log(result)
  return result;
}

swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
