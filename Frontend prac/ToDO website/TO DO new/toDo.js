var todos = [];

function addTodo() {
  var val = document.querySelector("input").value;
  if (val.trim()) {
    // Check if input is not empty
    todos.push({ title: val });
    document.querySelector("input").value = "";
    render();
    updateTotal();
  }
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
  updateTotal();
}

function updateTotal() {
  document.querySelector(".total").innerHTML = "Total: " + todos.length;
}
