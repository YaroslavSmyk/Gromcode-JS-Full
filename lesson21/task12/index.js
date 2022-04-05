export const squaredNumbers = () => {
  const num = document.querySelectorAll('.number')
  console.log(...num);
  [...num].map(ell => {
    const arr = ell.dataset.number;
    ell.dataset.squaredNumber = arr * arr;
  });

}
squaredNumbers()