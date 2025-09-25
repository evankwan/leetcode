import "./styles.css";

const app = {
  selectors: {},
};

app.initializeSelectors = () => {
  app.selectors.submitButton = document.getElementById("submit-button");
  app.selectors.list = document.getElementById("list");
  app.selectors.todoInput = document.getElementById("todo-input");
};

app.initializeEventListeners = () => {
  app.selectors.submitButton.addEventListener("click", app.handleSubmit);
};

app.initializeDeleteButtonListeners = () => {
  app.selectors.deleteButtons =
    app.selectors.list.getElementsByTagName("button");
  for (let i = 0; i < app.selectors.deleteButtons.length; i++) {
    const button = app.selectors.deleteButtons.item(i);
    button.addEventListener("click", app.deleteTodo);
  }
};

app.init = () => {
  app.initializeSelectors();
  app.initializeEventListeners();
  app.initializeDeleteButtonListeners();
};

app.handleSubmit = () => {
  const text = app.selectors.todoInput.value;
  app.selectors.todoInput.value = "";
  app.createListItem(text);
};

app.createElement = (tagName, text, appendTo) => {
  const el = document.createElement(tagName);
  el.innerText = `${text} `;
  appendTo.appendChild(el);
  return el;
};

app.createListItem = (text) => {
  const listItem = document.createElement("li");

  app.createElement("span", text, listItem);
  const deleteButton = app.createElement("button", "Delete", listItem);
  deleteButton.addEventListener("click", app.deleteTodo);

  app.selectors.list.appendChild(listItem);
};

app.deleteTodo = (e) => {
  const listItem = e.target.parentElement;
  listItem.remove();
};

app.init();
