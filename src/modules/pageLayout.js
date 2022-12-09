const pageLayout = () => {
  const app = document.querySelector('#app');
  app.innerHTML = `
      <div class="todo-header">
        <h1>ToDo List</h1>
        <i class="fa-solid fa-arrows-rotate"></i>
      </div>
      <div id="add-new-form-container">
      </div>
      <ul id="todos"></ul>
      <button class="clear-completed" type="button">Clear all completed</button>
      `;
};

export default pageLayout;