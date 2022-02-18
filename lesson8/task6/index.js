const pickProps = (obj, props) => {
  const result = pickProps.obj;
};

// examples
pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']); // ==> { a: 1, c: 3 }
pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex']); // ==> { a: 1, c: 3 }
