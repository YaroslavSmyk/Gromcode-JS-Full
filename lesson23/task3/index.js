const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false, id: Math.random() },
  { text: 'Pick up Tom from airport', done: false, id: Math.random() },
  { text: 'Visit party', done: false, id: Math.random() },
  { text: 'Visit doctor', done: true, id: Math.random() },
  { text: 'Buy meat', done: true, id: Math.random() },
];

const button = document.querySelector('.create-task-btn');
const input = document.querySelector('.task-input');
const todoList = document.querySelector('ul');

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      checkbox.dataset.id = id;
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });
  listElem.innerHTML = '';
  listElem.append(...tasksElems);
};

const taskComplete = event => {
  const isId = event.target.dataset.id;
  console.log(isId);

  const choseTask = tasks.find(elem => elem.id === +isId);

  choseTask.done = !choseTask.done;

  renderTasks(tasks);
};

todoList.addEventListener('click', taskComplete);
const createElem = () => {
  if (input.value === '') {
    return;
  }

  tasks.push({ text: input.value, done: false, id: Math.random() });
  renderTasks(tasks);
  input.value = '';
};

button.addEventListener('click', createElem);

renderTasks(tasks);



// А) при нажатии на галочку(чекбокс) должино поменятся done в объекте и наоборот

      
// найти чекбокс? при галочке включить listItemElem.append(checkbox, text);



// Б) при клике на Create создается новая запись в объекте:
//   1) добавить текст из инпута
//   2) поле пустое? да/ не довавляем в объект
//   3) запись добавлена? да/ очистить инпут


// В) задача done? да/задачу в низ списка.
