const changeDate = (newDate, typeOfDate, value) => {
  if (typeOfDate === 'years') {
    return newDate.setFullYear(newDate.getFullYear() + value);
  }
  if (typeOfDate === 'months') {
    return newDate.setMonth(newDate.getMonth() + value);
  }
  if (typeOfDate === 'days') {
    return newDate.setDate(newDate.getDate() + value);
  }
  if (typeOfDate === 'hours') {
    return newDate.setHours(newDate.getHours() + value);
  }
  if (typeOfDate === 'minutes') {
    return newDate.setMinutes(newDate.getMinutes() + value);
  }
  if (typeOfDate === 'seconds') {
    return newDate.setSeconds(newDate.getSeconds() + value);
  }
  if (typeOfDate === 'milliseconds') {
    return newDate.setMilliseconds(newDate.getMilliseconds() + value);
  }
};

export const shmoment = startValue => {
    debugger
  let resValueDate = new Date(startValue);
  const finishObj = {
    add(typeOfDate, value) {
      resValueDate = new Date(changeDate(resValueDate, typeOfDate, value));
      return this;
    },
    subtract(typeOfDate, value) {
      resValueDate = new Date(changeDate(resValueDate, typeOfDate, -value));
      return this;
    },
    result() {
      return new Date(resValueDate);
    },
  };
  return finishObj;
};

// const debug = shmoment(new Date(2022, 3, 13, 20, 31, 17))
//   .add('years', 5)
//   .subtract('years', 3)
//   .add('years', 10)
//   .result();
// const debug2 = shmoment(new Date(2021, 5, 7, 17, 17, 17))
//   .add('months', 1)
//   .subtract('milliseconds', 5000)
//   .result();
// const check3 = shmoment(new Date(2021, 5, 7, 17, 17, 17)).add('days', 5).result();
// const check4 = shmoment(new Date(2021, 5, 7, 17, 17, 17)).add('hours', 5).result();
// console.log(debug);
// console.log(debug2);
