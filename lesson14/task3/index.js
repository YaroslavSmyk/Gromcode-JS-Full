let result = 0;
export const add = (num1) => {
    result += num1;
};

export const decrease = (num2) => {
    result -= num2;
};

export const reset = () => {
    result = 0;
};

export const getMemo = () => {
   return result;
};

