var todos = [];

function addTodo() {
  var val = document.querySelector("input").value;
  todos.push({ title: val });
  document.querySelector("input").value = "";
  render();
}

function render() {
  document.getElementById("todos").innerHTML = ""; // Clear existing todos
  todos.forEach((element, index) => {
    var todoItem = document.createElement("div");
    todoItem.className = "todo-item";

    var checkbox = document.createElement("div");
    checkbox.className = "todo-checkbox";
    checkbox.setAttribute("onclick", "delTodo(" + index + ")");

    var todoText = document.createElement("h2");
    todoText.className = "todo-text";
    todoText.innerHTML = element.title;

    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoText);
    document.getElementById("todos").appendChild(todoItem);
  });
}
function delTodo(index) {
  todos.splice(index, 1);
  render();
}
