var ctr = 1;
function add() {
  var ele = document.querySelector("input");
  var val = ele.value;

  if (val) {
    var newTodo = document.createElement("div");
    newTodo.setAttribute("id", "todo-" + ctr);
    newTodo.innerHTML =
      ctr +
      " " +
      val +
      "<button onclick='del(\"todo-" +
      ctr +
      "\")'>Delete</button>";
    document.getElementById("todos").appendChild(newTodo);
    ele.value = "";
    ctr = ctr + 1;
  }
}
function del(ide) {
  var ele = document.getElementById(ide);
  ele.remove();
  ctr--;
}
