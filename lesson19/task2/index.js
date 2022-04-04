export const getOwnProps = obj => {
  let result = [];
  for (let i in obj) {
    if (obj.hasOwnProperty(i) && typeof obj[i] !== 'function') {
      result.push(i);
    }
  }
  return result;
};
