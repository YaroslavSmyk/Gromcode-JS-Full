function removeDuplicates(array) {
  debugger;
  let result = [];
  if (!Array.isArray(array)) {
    return null;
  } 
 for (let i = 0; i < array.length; i++) {
    if (result.indexOf(array[i]) === -1) {
    result.push(array[i]);
    console.log(result);
  }
 }
 return result;
}
removeDuplicates([1, 3, 5, 3, 9, 5]);