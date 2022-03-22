const countOccurrences = (text = '', str) => {
  if (str.length === 0) {
    return null;
  }

  const a = text.toLocaleLowerCase();
  const b = str.toLocaleLowerCase();
  // if (typeof text === undefined) {
  //   text = '';
  // }

  
  let result = a.split(b).length - 1;
  console.log(result);
  return result;
};

countOccurrences('22M22M22MM22', '22');
