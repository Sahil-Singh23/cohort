function add() {
  var ele = document.querySelector("input");
  var val = ele.value;
  if (val) {
    var newTodo = document.createElement("div");
    newTodo.innerHTML = val + "<button>Delete</button>";
    document.getElementById("todos").appendChild(newTodo);
    ele.value = "";
  }
}
