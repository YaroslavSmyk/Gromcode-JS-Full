/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */
// export { makePromise }

// const makePromise = () => {
//   const pr = Promise.resolve(pr);
//   return pr;
// };

// /*
//  * пример использования
//  */
// makePromise(17).then(number => {
//   console.log(number); // 17
// });

const makePromise = num => {
  return new Promise(resolve => {
    resolve(num);
  });
};
// const pr = 17;
/*
 * пример использования
 */
makePromise(17).then(number => {
  console.log(number); // 17
});
