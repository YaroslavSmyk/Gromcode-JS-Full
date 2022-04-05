export { getItemsList, getItemArray };

const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};

const getItemArray = () => {
  const eleventsArray = document.querySelectorAll('.tool');
  console.dir(eleventsArray);
return Array.from(eleventsArray);
};

