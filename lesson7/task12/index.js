const arrAverage = arr => {
    debugger;
    if (!Array.isArray(arr)) {
      return null;
    }
    const result = arr.reduce((acc, el) => (acc + el))
    console.log(result) 
    return result / arr.length;
}
arrAverage([2, 5, 6, 3]);