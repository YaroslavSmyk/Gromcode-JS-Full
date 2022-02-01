function sum(from, to) {
  let result = 0;
    for (let i = from; i <= to; i++) {
        result += i;
    }
  return result;
}

function compareSums(a, b, c, d) {
  let aB = sum(a, b);
  let cD = sum(c, d);
  return aB > cD
}
