'use strict';



const getMaxAbsoluteNumber = arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const absoluteValues = arr.map(num => Math.abs(num));
  const max = Math.max(...absoluteValues);
  console.log(max);
  return max;
};

// examples
getMaxAbsoluteNumber(-10, 10, -10); // ===> 10
getMaxAbsoluteNumber([2.1, 0, 1.6]); // ===> 2.1
getMaxAbsoluteNumber([-6, 3, 5, -1]); // ===> 6
getMaxAbsoluteNumber([-777, 3, -1, 45, -20]); // ===> 777
