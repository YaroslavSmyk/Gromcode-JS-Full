function getParsedIntegers(arr) {
  let result1 = arr.map(num => Number.parseInt(num));
  console.log(result1);
  return result1;
}

function getParsedIntegersV2(arr) {
  let result2 = arr.map(num => parseInt(num));
  console.log(result2);
  return result2;
}

function getParsedFloats(arr) {
    let result3 = arr.map(num => Number.parseFloat(num));
    console.log(result3);
    return result3;
}

function getParsedFloatsV2(arr) {
    let result4 = arr.map(num => parseFloat(num));
    console.log(result4);
    return result4;
}

getParsedIntegers([2, 3, '6.19']);
getParsedIntegersV2([2, 3, '6text']);
getParsedFloats([2, 3, '6text']);
getParsedFloatsV2([2, 3, '6text']);
