import './style.css';
import {Todo} from './main.js';

const itemList = document.querySelector('#myUL');
const tasksArray = JSON.parse(localStorage.getItem('todo')) || [];
const storage = (todo) => {
  todo.sort((a, b) => a.index - b.index);
  localStorage.setItem('todo', JSON.stringify(todo));
};

const populateHtml = () => {
  storage(tasksArray);
  itemList.innerHTML = tasksArray
    .map(
      (data) => `<li class='items'>
          <div>
            <input type='checkbox' ${
  data.completed ? 'checked' : ''
}
        class='todo-item' name='car'>
            <input for='' class='task' value='${data.description}'>
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
  }
});

const label = document.querySelectorAll('.task');
label.forEach((input, index) => input.addEventListener('change', () => {
tasksArray[index].description = input.value;
  storage(tasksArray);
}));

label.forEach((input, index) => input.addEventListener('click', () => {
  const removeBtn = document.querySelectorAll('.remove-btn');
  removeBtn[index].style.display = 'inline';
}));