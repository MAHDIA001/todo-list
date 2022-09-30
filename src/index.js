import './style.css';
import Todo from './main';
import Storage from './storage';
import complete from './complete';

const tasksArray = JSON.parse(localStorage.getItem('todo')) || [];
const itemList = document.querySelector('#myUL');
const newtodo = new Todo();
newtodo.value = '';