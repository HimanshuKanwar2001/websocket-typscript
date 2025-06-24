// function addTodoList() {
//   const input = document.querySelector("input");
//   const value = input.value;
//   const CreateDivEl = document.createElement("div");
//   const spanEl=document.createElement("span");
//   spanEl.innerHTML=value;
//   const btn=document.createElement("button")
//   btn.innerHTML="Delete";
//   btn.setAttribute("onclick","deleteFromList(this)");
//   CreateDivEl.appendChild(spanEl);
//   CreateDivEl.appendChild(btn);

//   const bodyEl = document.querySelector("body");
//   bodyEl.appendChild(CreateDivEl);
//   console.log(CreateDivEl);
//   bodyEl.appendChild(CreateDivEl);
//   input.value = "";
// }
// function deleteFromList(el) {
//   console.log(el.parentElement);

//   const parent = el.parentElement;
//   const parentDel=parent.parentElement;
//   parentDel.removeChild(parent);
// }

let todos = [];
function addTodoList() {
  todos.push({
    title: document.querySelector("input").value,
  });
  render();
}
function createTodoComponent(todo, index) {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const button = document.createElement("button");
  button.innerHTML = "Delete";
  button.setAttribute("onclick", "deleteTodo(" + index + ")");
  h1.innerHTML = todo.title;
  div.appendChild(h1);
  div.appendChild(button);
  return div;
}

function deleteTodo(index) {
  todos.splice(index, 1);
  render();
}

function deleteLastTodo() {
  todos.splice(todos.length - 1, 1);
  render();
}
function deleteFirstTodo() {
  todos.splice(0, 1);
  render();
}

//react
//send batch updates
function render() {
  document.querySelector("#todos").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const element = createTodoComponent(todos[i], i);
    document.querySelector("#todos").appendChild(element);
  }
}

//Reconcile
