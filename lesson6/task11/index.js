function checker(arr) {
  debugger;
  let result = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
    let a = Math.min(...arr);
    let b = Math.max(...arr);
    result = a + b;
    if (result > 100) {
      return true;
    } else {
    return false;
    }
  }
checker([1, 2, 5, 8]);

