export { dayOfWeek };
const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];

const dayOfWeek = (date, days) => {
  debugger;
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);

  return weekDays[new Date(dateInFuture).getDate()];
};

const result = dayOfWeek(new Date(2019, 0, 1), 14);

console.log(result);
