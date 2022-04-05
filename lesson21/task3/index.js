export { getItemsList, getItemsArray };

const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};

const getItemsArray = () => {
  const eleventsArray = document.querySelectorAll('.tool');
  const arr = Array.from(eleventsArray);
  console.dir(arr);

  return arr;
};
