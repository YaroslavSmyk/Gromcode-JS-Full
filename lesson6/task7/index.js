const checkSum = arr => {
  debugger;
  let result = 0; 
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i of arr) {
    result += i;
  } if (result > 100) {
    return true;
  } else {
    return false;
  }
};

// examples
checkSum([10, 10, 10]); // ===> false
checkSum([10, 99, 1]); // ===> true
checkSum([-6, -3, 200]); // ===> true
