const increaseEvenEl = (arr, delta) => {
    debugger;
    // let copy = [...arr]
if (!Array.isArray(arr)) {
    return null;
  }
return arr.filter(el => el % 2 === 0).map(el => el + delta)
}