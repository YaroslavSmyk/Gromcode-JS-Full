const page = document.querySelectorAll('.pagination__page');

const handleClick = event => {
  console.log(event.target.dataset.pageNumber);
};
page.forEach(ell => ell.addEventListener('click', handleClick));
