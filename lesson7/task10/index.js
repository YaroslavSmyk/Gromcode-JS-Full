const sum = (arr) => {
    debugger;
  if (!Array.isArray(arr)) {
    return null;
  }
  const arrSum = arr.reduce((acc, arr) => acc + arr);
  console.log(arrSum );
  return arrSum ;
};

sum([2, 5, 6, 3, 0, 3, -1]);
