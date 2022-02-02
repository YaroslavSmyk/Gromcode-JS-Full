const increaseEvenEl = (arr, delta) => {
  debugger;
  let result = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i of arr) {
    if (i % 2 === 0) {
      result.push(i + delta);
    } else if (i % 2 !== 0) {
      result.push(i);
    }
    
  } return result;
};

// examples
increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20); // ===> [22, 5, 26, 28, 11, 9, 24]
increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
increaseEvenEl([], 120); // ===> []
