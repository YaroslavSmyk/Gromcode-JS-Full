'use strict';

/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */
const superRound = (num, prec) => {
  let result = [];
  result.push(Math.floor(num * 10 ** prec) / 10 ** prec);
  result.push(Math.trunc(num * 10 ** prec) / 10 ** prec);
  result.push(Math.ceil(num * 10 ** prec) / 10 ** prec);
  result.push(Math.round(num * 10 ** prec) / 10 ** prec);
  result.push(+num.toFixed(prec));
  console.log(result);
};

// examples
superRound(11.12556, 2); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
superRound(6.11, 3); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
