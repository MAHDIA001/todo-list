import './style.css';
import Todo from './main';

const label = document.querySelectorAll(".task");
label.forEach((input, index) => input.addEventListener('click', () => {
  const removeBtn = document.querySelectorAll('.remove-btn');
  removeBtn[index].style.display = 'inline';
}));