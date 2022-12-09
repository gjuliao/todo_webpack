import displayTodos from './displayTodos.js';
import { todoCollection } from './TodoCollection.js';

const removeTodo = () => {
  const clearButton = document.querySelector('.clear-completed');

  clearButton.addEventListener('click', () => {
    todoCollection.clearCompleted();
    displayTodos();
  });
};

export default removeTodo;