export { getItemsList, getItemArray };

const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};

const getItemArray = () => {
  const eleventsArray = Array.from(document.querySelectorAll('.tool'));
  console.dir(eleventsArray);
return eleventsArray
};

