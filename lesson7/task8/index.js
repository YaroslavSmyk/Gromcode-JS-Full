const cloneArr = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let a = [...arr];
  return a;
};
