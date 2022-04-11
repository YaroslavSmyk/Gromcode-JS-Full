export { dayOfWeek };
const week = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const resultDate = new Date(date).setDate(day + days);
  return week[new Date(resultDate).getDay()];
};
