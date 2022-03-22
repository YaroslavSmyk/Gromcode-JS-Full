// trim обрезать пробелы по бокам
// unshift добавить $ в начало
// toFixed знаки после запятой
// отбросить елемент если есть буквы  -  создать перменную с цыфрами и сравнивать?
// isfinit

// const cleanTransactionsList = transactions => {
//   debugger;
//   let result = [...transactions];
//   let result2 = [];
//   result2.push().result.trim();

// //   for (let i of result) {
// //     result2.push(result[i]);

// //     // a += i.trim();
// //     console.log(result2);
// //   }
//     console.log(result);
//     console.log(result2);

//   return result2;
// };

const cleanTransactionsList = arr => {
  debugger;
  const resArray = arr
    .filter(elem => isFinite(elem))
    .map(elem => '$' + parseFloat(elem).toFixed(2));
  console.log(resArray);
  return resArray;
};

cleanTransactionsList([' 1.9 ', '16.4', 17, ' 1 dollar ']);
