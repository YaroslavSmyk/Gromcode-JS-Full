export const getSection = num => {
  const span = document.querySelector(`span[data-number="${num.toFixed()}"]`);
  const parent = span.closest('.box');
  return parent.getAttribute('data-section');
};
