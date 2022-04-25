export { asyncSum };

const getValueWithDelay = (value, delay) =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });

const asyncNum1 = getValueWithDelay(56, 1000);
const asyncNum2 = getValueWithDelay('56', 5000);

const getSum = numbers =>
  numbers.filter(value => !isNaN(value)).reduce((acc, num) => acc + Number(num), 0);

const asyncSum = (...asyncNumber) => {
  return Promise.all(asyncNumber).then(numbers => getSum(numbers));
};
asyncSum(asyncNum1, asyncNum2).then(result => console.log(result));
