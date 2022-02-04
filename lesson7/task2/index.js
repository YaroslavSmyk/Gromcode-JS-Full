const sortDesc = (num) => {
  const so = [...num];
  so.sort((a, b) => b - a);

  return so;
};
const arr = [1, 2, 4, 8, 12];
console.log(sortDesc(arr));
