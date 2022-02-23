function getFiniteNumbers(arr) {
  let result1 = arr.filter(num => Number.isFinite(num));
  console.log(result1);
  return result1;
}

function getFiniteNumbersV2(arr) {
  let result2 = arr.filter(num => isFinite(num));
  console.log(result2);
  return result2;
}

function getNaN(arr) {
  let res1 = arr.filter(num => Number.isNaN(num));
  console.log(res1);
  return res1;
}

function getNaNV2(arr) {
  let res2 = arr.filter(num => isNaN(num));
  console.log(res2);
  return res2;
}

function getIntegers(arr) {
  let res3 = arr.filter(num => Number.isInteger(num));
  console.log(res3);
  return res3;
}

getFiniteNumbers(['20', 'qwe', 6, 9]);
getFiniteNumbersV2(['20', 'qwe', 6, 9]);
getNaN(['20', 'qwe', 6, 9]);
getNaNV2(['20', 'qwe', 6, 9]);
getIntegers(['20', 'qwe', 6, 9]);
