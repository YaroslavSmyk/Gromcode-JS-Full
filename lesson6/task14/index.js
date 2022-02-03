const getSubArray = (arr, numberOfElements) => {
    debugger;
    let el = arr.splice(0, numberOfElements);
    console.log(el);
    return el;
  };
  
  getSubArray([1, 3, 4, 5, 8,], 3)