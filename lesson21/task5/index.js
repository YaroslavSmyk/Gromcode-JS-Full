
// 1.Получить округленную в меньшую сторону сумму с 2-мя знаками после запятой в формате '$17.15.
// 2.сначала reduce потом toFixed потом Math.floor

function getTotalPrice(num) {
  let result = '';
  let res1 = num.reduce((el, sum) => el + sum)

  result = Math.floor(res1 * 100) / 100;

  return '$'+result;
}

getTotalPrice([10.353, 12, 15.943]);
