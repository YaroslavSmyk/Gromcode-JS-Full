const input = document.querySelector('.text-input');

const create = () => {
  console.log(input.value)
};

input.addEventListener('change', create);