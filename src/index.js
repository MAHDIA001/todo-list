import './style.css';
import Todo from './main.js';
import Storage from './storage.js';
import complete from './complete.js';

const tasksArray = JSON.parse(localStorage.getItem('todo')) || [];
const itemList = document.querySelector('#myUL');
const newtodo = new Todo();
newtodo.value = '';

const populateHtml = () => {
  Storage(tasksArray);
  itemList.innerHTML = tasksArray
    .map(
      (data) => `<li class='items'>
          <div>
            <input type='checkbox' ${data.completed ? "checked" : ""}
        class='todo-item' name='car'>
            <input for='' class='task' id='task' value='${data.description}'>
          </div>
          <div>
          <button class='remove-btn'>x</button>
          </div>
        </li>`
    )
    .join(" ");
  const removeBtn = document.querySelectorAll(".remove-btn");

  removeBtn.forEach((btn, index) =>
    btn.addEventListener("click", () => {
      const item = index + 1;
      Todo.removeTask(item);
      populateHtml();
    })
  );
};

populateHtml();
const clear = document.querySelector("#clear-button");
clear.addEventListener("click", () => {
  const completed = tasksArray.filter((data) => data.completed === true);
  completed.forEach((data) => {
    const index = tasksArray.indexOf(data);
    tasksArray.splice(index, 1);
  });
  Storage(tasksArray);
  populateHtml();
});
complete();
