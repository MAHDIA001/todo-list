import Storage from './storage.js';

const itemList = document.querySelector('#myUL');
const tasksArray = JSON.parse(localStorage.getItem('todo')) || [];
export default class Todo {
  constructor(description) {
    this.id = tasksArray.length + 1;
    this.description = description;
    this.completed = false;
  }

  static updateIndex = () => {
    tasksArray.forEach((data, index) => {
      data.id = index + 1;
    });
  };

  static removeTask = (index) => {
    tasksArray.splice(index - 1, 1);
    this.updateIndex();
  };
}

const populateHtml = () => {
  Storage(tasksArray);
  itemList.innerHTML = tasksArray
    .map(
      (data) => `<li class='items'>
          <div>
            <input type='checkbox' ${data.completed ? 'checked' : ''}
        class='box' name='car'>
            <input for='' class='task' id='task' value='${data.description}'>
          </div>
          <div>
          <button class='remove-btn'>x</button>
          </div>
        </li>`,
    ).join(' ');
  const removeBtn = document.querySelectorAll('.remove-btn');
  removeBtn.forEach((btn, index) => btn.addEventListener('click', () => {
    const item = index + 1;
    Todo.removeTask(item);
    populateHtml();
  }));
};

populateHtml();

const toDoInput = document.querySelector('#todo-input');
toDoInput.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    const description = toDoInput.value;
    const newToDo = new Todo(description);
    tasksArray.push(newToDo);
    populateHtml();
    toDoInput.value = '';
    window.location.reload();
  }
});

const label = document.querySelectorAll('.task');
label.forEach((input, index) => input.addEventListener('change', () => {
  tasksArray[index].description = input.value;
  Storage(tasksArray);
}));

const complete = () => {
  const box = document.querySelectorAll('.box');
  box.forEach((input, index) => input.addEventListener('change', (e) => {
    if (tasksArray[index].completed === false) {
      e.target.closest('input').style.textDecoration = 'line-through';
      tasksArray[index].completed = true;
    } else {
      tasksArray[index].completed = false;
    }
    Storage(tasksArray);
  }));
};

const clear = document.querySelector('#clear-button');
clear.addEventListener('click', () => {
  const completedTasks = tasksArray.filter((data) => data.completed === true);
  completedTasks.forEach((data) => {
    const index = tasksArray.indexOf(data);
    tasksArray.splice(index, 1);
  });
  Storage(tasksArray);
  populateHtml();
  window.location.reload();
});
complete();