export const getMinSquaredNumber = arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  let result1 = arr.map(elem => Math.abs(elem));
  let result = Math.min(...result1);
  console.log(result);
  return result * result;
};

getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
