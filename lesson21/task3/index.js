'use strict';

const multiRound = num => {
  let result = [];
  result.push(Math.floor(num * 100) / 100);
  result.push(Math.trunc(num * 100) / 100);
  result.push(Math.ceil(num * 100) / 100);
  result.push(Math.round(num * 100) / 100);
  result.push(+num.toFixed(2));
  console.log(result);
};

// examples
multiRound(11.12556); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
multiRound(6.112); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]
