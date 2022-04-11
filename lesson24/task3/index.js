const getDiff = (startDate, endDate) => {
  const a = Math.abs(new Date(startDate) - new Date(endDate));

  const difference = Math.floor(a / 1000);
  console.log('difference', difference);
  const days = Math.floor(difference / 60 / 60 / 24);
  console.log('days', days);

  let leftsec = difference - days * 24 * 60 * 60;
  console.log('leftsec', leftsec);

  const hours = Math.floor(leftsec / 60 / 60);
  console.log('hours', hours);

  leftsec = difference - days * 24 * 60 * 60 - hours * 60 * 60;
  console.log('leftsec', leftsec);

  const min = Math.floor(leftsec / 60);
  console.log('min', min);

  const sec = difference - days * 24 * 60 * 60 - hours * 60 * 60 - min * 60;
  console.log('sec', sec);

  return `${days}d ${hours}h ${min}m ${sec}s`;
};

console.log(getDiff(new Date(2021, 2, 5, 0, 10, 5), new Date(2020, 1, 4, 11, 40, 10)));
