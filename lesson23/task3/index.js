const tasks = [
  { text: 'Buy milk', done: true, id: Math.random() },
  { text: 'Pick up Tom from airport', done: false, id: Math.random() },
  { text: 'Visit party', done: false, id: Math.random() },
  { text: 'Visit doctor', done: false, id: Math.random() },
  { text: 'Buy meat', done: true, id: Math.random() },
];



const listElem = document.querySelector('.list');
const input = document.querySelector('.task-input');
const button = document.querySelector('.create-task-btn');

const pushButton = () => {
  if (input.value === '') {
    return;
  }
  tasks.push({ text: input.value, done: false, id: Math.random() });
  console.log(tasks);

  input.value = '';

  renderTasks(tasks);
};

button.addEventListener('click', pushButton);

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      checkbox.dataset.id = id;
      const completeTask = event => {
        const isCheckbox = event.target.classList.contains('.list__item-checkbox');
        if (!isCheckbox) {
          return;
        }
        const idChecked = tasks.forEach(elem => {
          if (elem.id === event.target.id) {
            listItemElem.classList.add('list__item_done');
          } else {
            listItemElem.classList.remove('list__item_done');
          }
        });
      };

      listElem.addEventListener('click', completeTask);
      checkbox.classList.add('list__item-checkbox');
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

    listElem.innerHTML = '';

  listElem.append(...tasksElems);
};

renderTasks(tasks);



// А) при нажатии на галочку(чекбокс) должино поменятся done в объекте и наоборот

      
// найти чекбокс? при галочке включить listItemElem.append(checkbox, text);



// Б) при клике на Create создается новая запись в объекте:
//   1) добавить текст из инпута
//   2) поле пустое? да/ не довавляем в объект
//   3) запись добавлена? да/ очистить инпут


// В) задача done? да/задачу в низ списка.
