function uniqueCount(array) {
  debugger;
  let result = [];
  if (!Array.isArray(array)) {
    return null;
  }
 for(let i = 0; i < array.length; i++) {
  if (result.indexOf(array[i]) === -1) {
    result.push(array[i]);
    console.log(result);
  }
 }
 return result.length;
}
uniqueCount([1, 4, 1, 8, 3, 4, 8, 8]);