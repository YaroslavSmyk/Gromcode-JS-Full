export { delay }

function delay() {
  const pr = new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  return pr;
}
delay(3000).then(() => console.log('Done'))
