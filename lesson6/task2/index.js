function getSum(arr) {
  let result = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  for (const i of arr) {
    result += i;
  }
  return result;
}
getSum([1, 10, -10, 4]); // ==> 5
getSum([1]); // ==> 1
getSum([-8, 8]); // ==> 0
getSum(10, 12, 14); // ==> null
