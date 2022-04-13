// const mult = (a, b) => a * b;

export { mult, triple, twice }
const mult = a => b => a * b;

const twice = mult(2);

const triple = mult(3);