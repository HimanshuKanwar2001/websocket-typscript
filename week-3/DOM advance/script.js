let todos = [];
function addToList() {
  todos.push({
    title: document.querySelector("input").value,
  });
  render();
}
function delteTodo() {
  render();
}

function render() {
  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];
    const divEl = document.createElement("div");
    const h1El = document.createElement("h1");
    const buttonEl = document.createElement(button);
    buttonEl.innerHTML = "Delete";
    buttonEl.setAttribute("onclick", "deleteTodo(this)");
    h1El.innerHTML = todo.title;
    divEl.appendChild(h1El);
    divEl.appendChild(buttonEl);
    const bodyEl = document.querySelector("body");
    bodyEl.appendChild(divEl);
  }
}
