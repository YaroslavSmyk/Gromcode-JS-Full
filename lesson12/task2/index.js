// const reverseString = str => {
//   debugger;
//   let result = ' ';
//   if (typeof str !== 'string') {
//     return null;
//   }
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//     console.log(result);
//   }
//   return result;
// };

// reverseString('asdfg');

const reverseString = str => {
  debugger;
  let result = ' ';
  if (typeof str !== 'string') {
    return null;
  }
  result = str.split('').reverse().join('');
  console.log(result);
  return result;
};

reverseString('asdfg');
