function reverseArray(arr) {
  debugger;
  let result = [...arr];
  if (!Array.isArray(arr)) {
    return null;
  }
  // for (let i = arr.length -1; i >= 0; i--) {
  //   result.push(arr[i]);
  // }
result.reverse();
console.log(result);
  return result;
}
reverseArray([1, 2, 3]);