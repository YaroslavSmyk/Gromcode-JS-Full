// 1. Получить масив
// 2. перебор > substr....

const splitString = (srt, num) => {
  debugger;
  let result = [];
  let step = 0;
  if (typeof srt !== 'string') {
    return null;
  } else if (num === undefined) {
    num = 10;
  }

  for (let i = 0; i < srt.length; i++) {
    const partSrt = srt.substr(step, num);
    if (partSrt.length === num) {
      result.push(partSrt);
      step += num;
    }
    if (partSrt.length < num) {
      result.push(partSrt + '.'.repeat(num - partSrt.length));
      break;
    }
  }

  console.log(result);
};

splitString('asdf edfggg', 4);
