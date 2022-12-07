/* eslint-disable eqeqeq */

export default class Store {
  static getTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    return todos;
  }

  static addTodo(todo) {
    const todos = Store.getTodos();
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  static removeTodo(index) {
    let todos = Store.getTodos();
    todos = todos.filter((todo) => todo.index != index);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}