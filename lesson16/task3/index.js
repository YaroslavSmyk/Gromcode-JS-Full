export const createArrayOfFunctions = num => {
  let result = [];
  if (num !== Number(num)) {
    return null;
  }
  if (num.length === 0) {
    return [];
  }
  for (let i = 0; i < num; i++) {
    result[i] = function () {
      return i;
    };
  }
};
