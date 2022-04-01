function sumOfSquares() {
  return [...arguments].reduce((acc, ell) => {
    return acc + ell * ell;
  }, 0);
};

console.log(sumOfSquares(2, 5, 4));
