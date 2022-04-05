export { getItemsList, getItemArray };

const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};

const getItemArray = () => {
  const eleventsArray = document.querySelectorAll('.tool');
  const arr = Array.from(eleventsArray);
  console.dir(arr);

return arr;
};

getItemsList();

getItemArray();