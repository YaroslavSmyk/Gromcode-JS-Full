const reverseArray = arr => {
    debugger;
    let copy = [...arr]
if (!Array.isArray(arr)) {
    return null;
  }
  return copy.reverse();
}