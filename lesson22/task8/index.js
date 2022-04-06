const input = document.querySelector('.text-input');

const create = event => {
  console.log(event.target.value);
};

input.addEventListener('change', create);
