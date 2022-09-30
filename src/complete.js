import Todo from './main';
import Storage from './storage';

const tasksArray = JSON.parse(localStorage.getItem('todo')) || [];
const list = document.querySelector('#task');
const complete = () => {
  const check = document.querySelectorAll('input[type=checkbox]');
  check.forEach((input, index) =>
    input.addEventListener('change', () => {
      if (input.checked) {
        tasksArray[index].completed = true;
        // list[index].style.textDecoration = 'line-through';
        // list[index].style.color = 'grey';
      } else {
        tasksArray[index].completed = false;
        //    list[index].style.textDecoration = 'none';
        //    list[index].style.color = 'black';
      }
      Storage(tasksArray);
    })
  );
};

export default complete;