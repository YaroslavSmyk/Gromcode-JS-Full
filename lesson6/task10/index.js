function cloneArr(arr) {
  debugger;
  let result = [];
  if (!Array.isArray(arr)) {
    return null;
  }
    for (let i of arr) {
      result = arr.slice();
    }
  return result;
}
cloneArr([1, 2, 3]);