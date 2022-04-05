// 1. Вернуть масив длиной.length,
// елементы целые числа + случайные в промежутке from, to.
// Вернуть null если в промежутке from, to - нет целых чисел.
// 2.

const getRandomNumbers = (length, from, to) => {
  if ((to - from) < 1) {
    return null;
  }
  let array = [];
  from = Math.ceil(from);
  to = Math.floor(to);

for (let i = 0; i < length; i++) {
  let arrRandom = Math.random() * (from -to) + to;
  array.push(Math.floor(arrRandom));
}
console.log(array);

return array;
};

// examples
getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
