import { getDataFromLocalStorage } from './local-storage.js';
import Todo from './Todo.js';

export default class TodoCollection {
  constructor(todos) {
    this.todos = todos;
  }

  addTodo(description) {
    const index = this.todos.length + 1;
    const todo = new Todo({ description, index });
    this.todos.push(todo);
    this.setToLocalStorage();
  }

  removeTodo(index) {
    this.todos = this.todos.filter((todo, todoIndex) => todoIndex !== index);
    this.setToLocalStorage();
    this.resetIndex();
  }

  updateDescription(index, description) {
    for (let i = 0; i < this.todos.length; i += 1) {
      if (this.todos[i].index === index) {
        this.todos[i].description = description;
        this.setToLocalStorage();
        break;
      }
    }
  }

  setToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  getTodos() {
    return this.todos.sort((a, b) => a.index - b.index);
  }

  resetIndex() {
    this.todos.forEach((todo, index) => {
      todo.index = index + 1;
    });
    this.setToLocalStorage();
  }

  clearCompleted() {
    this.todos = this.todos.filter((todo) => todo.completed !== true);
    this.setToLocalStorage();
    this.resetIndex();
  }

  markAsCompleted(index) {
    for (let i = 0; i < this.todos.length; i += 1) {
      if (this.todos[i].index === index) {
        this.todos[i].completed = !this.todos[i].completed;
        this.setToLocalStorage();
        break;
      }
    }
  }
}

const todoCollection = new TodoCollection(getDataFromLocalStorage('todos'));

export { todoCollection };