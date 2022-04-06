const task = document.querySelector('.task-status');

const create = event => {
  if (event.target.checked) {
    console.log(true);
  } else {
    console.log(false);
  }
};

task.addEventListener('change', create);
