const task = document.querySelector('.task-status');

const create = () => {
  console.log(task.checked)
};

task.addEventListener('change', create);