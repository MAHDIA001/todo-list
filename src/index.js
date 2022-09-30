import './style.css';
import Todo from './main.js';
// import Storage from './storage.js';

const tasksArray = JSON.parse(localStorage.getItem('todo')) || [];
const itemList = document.querySelector('#myUL');
const newtodo = new Todo();
newtodo.value = '';