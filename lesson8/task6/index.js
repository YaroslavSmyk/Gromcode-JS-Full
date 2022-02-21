const pickProps = (obj, props) => {
  let result = {};
  for (let key in obj) {
    if (props.includes(key)) {
      result[key] = obj[key];
    }
  }
  console.log(result);
  return result;
};

// examples
pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']); // ==> { a: 1, c: 3 }
pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex']); // ==> { a: 1, c: 3 }
