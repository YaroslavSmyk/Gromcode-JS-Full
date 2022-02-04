const flatArray = arr => {
    const newArr = arr
   .reduce((acc, elem) => {
        return acc.concat(elem).sort((a, b) => a - b);;
   }, []);
   console.log(newArr);
   return newArr;
  };
  flatArray([1, 9, 2, [11, 12, 13], 50]) 

//   arr.slice().sort((a, b) => a - b);