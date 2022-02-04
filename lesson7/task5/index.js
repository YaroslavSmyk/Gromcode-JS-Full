const squareArray = arr => {
    debugger;
if (!Array.isArray(arr)) {
    return null;
  }
return arr.map((ell) => ell * ell);
};

const brray = ([1, 5, 6]);
console.log(squareArray(brray));


// function squareArray(arr) {
//     if (!Array.isArray(array)) {
//         return null;
//       }
//     const a = arr.maps((ell) => ell * ell);   
// }