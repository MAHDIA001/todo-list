import './style.css';
import Todo from './main.js';

const newtodo = new Todo();
newtodo;
const label = document.querySelectorAll('.task');
label.forEach((input, index) => input.addEventListener('click', () => {
  const removeBtn = document.querySelectorAll('.remove-btn');
  removeBtn[index].style.display = 'inline';
}));