export const createCalculator = () => {
  let result = 0;
  const add = num1 => {
    result += num1;
  };

  const decrease = num2 => {
    result -= num2;
  };

  const reset = () => {
    result = 0;
  };

  const getMemo = () => {
    return result;
  };
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};
