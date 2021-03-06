export { getGreenwichTime };

const formater = new Intl.DateTimeFormat('en', {
  timeZone: 'UTC',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

const getGreenwichTime = date => formater.format(date);

console.log(getGreenwichTime(new Date()))