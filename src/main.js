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
        class='todo-item' name='car'>
            <input for='' class='task' id='task' value='${data.description}'>
          </div>
          <div>
          <button class='remove-btn'>x</button>
          </div>
        </li>`,
    )
    .join(' ');
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
    Storage(tasksArray);
  }));
// // const list  = document.querySelector('#task');
// const complete = () => {
//   const check = document.querySelectorAll('input[type=checkbox]');
//   check.forEach((input, index) =>
//     input.addEventListener('change', () => {
//       if (input.checked) {
//         tasksArray[index].completed = true;
//         // list[index].style.textDecoration = 'line-through';
//         // list[index].style.color = 'grey';
//       } else {
//         tasksArray[index].completed = false;
//         //    list[index].style.textDecoration = 'none';
//         //    list[index].style.color = 'black';  
//     }
//       Storage(tasksArray);
//     })
//   );
// };