import './style.css';
import Todo from './modules/classTodo.js';
import UI from './modules/classUI.js';
import Store from './modules/classStore.js';

document.getElementById('input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const index = Math.floor(Math.random() * 10000);
    const completed = false;
    const description = document.getElementById('input').value;

    const todo = new Todo(index, completed, description);

    UI.addTodoToList(todo);
    Store.addTodo(todo);
    UI.clearField();
  }
});

document.getElementById('ul_list').addEventListener('click', (e) => {
  UI.deleteTodo(e.target);
  Store.removeTodo(e.target.parentElement.id);
});

document.addEventListener('DOMContentLoaded', UI.displayTodos);
