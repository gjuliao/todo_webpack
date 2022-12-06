import Store from './classStore.js';

const listUl = document.getElementById('ul_list');

export default class UI {
  static displayTodos() {
    const todos = Store.getTodos();
    todos.forEach((el) => UI.addTodoToList(el));
  }

  static addTodoToList(el) {
    const li = document.createElement('li');
    li.classList.add('li_todo');
    li.setAttribute('id', el.index);
    li.innerHTML = `${el.description} <span class="remove">X</span>`;
    listUl.appendChild(li);
  }

  static deleteTodo(el) {
    if (el.classList.contains('remove')) {
      el.parentElement.remove();
    }
  }

  static clearField() {
    document.getElementById('input').value = '';
  }
}