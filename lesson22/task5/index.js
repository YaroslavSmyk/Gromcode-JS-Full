const button = document.querySelector('.search__btn');

const create = () => {
  const input = document.querySelector('.search__input');
  console.log(input.value);
};

button.addEventListener('click', create);
