import './style.css';
import Todo from './main.js';

const tasksArray = JSON.parse(localStorage.getItem('todo')) || [];
const newtodo = new Todo();
const label = document.querySelectorAll('.task');
label.forEach((input, index) => input.addEventListener('click', () => {
  const removeBtn = document.querySelectorAll('.remove-btn');
  removeBtn[index].style.display = 'inline';
}));