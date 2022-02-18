const filterNames = (arr, text) => {
  debugger;
  const result = arr.filter((el) => el.length > 5);
  const endResult = result.filter((elem) => elem.includes(text));
  console.log(result);
  console.log(endResult);
  return endResult;
};

filterNames(['John', 'Olivya', 'Vanya', 'Nastya'], 'ya');
