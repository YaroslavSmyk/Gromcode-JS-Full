const button = document.querySelectorAll('.btn');

const handelClick = event => {
  console.log(event.target.textContent);
};
button.forEach(ell => ell.addEventListener('click', handelClick));
